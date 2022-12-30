import { Board } from './entity/board.entity';
import { Injectable } from '@nestjs/common';
import { BoardRepository } from './entity/board.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: BoardRepository,
  ) {}

  findAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  findOne(sp_seq: number): Promise<Board> {
    return this.boardRepository.findOne({
      where: {
        sp_seq: sp_seq,
      },
    });
  }

  findType(sp_type: string): Promise<Board[]> {
    return this.boardRepository.find({
      where: {
        sp_type: sp_type,
      },
    });
  }
}
