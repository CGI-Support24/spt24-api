import { Controller, Get, Param } from '@nestjs/common/decorators';
import { BoardService } from './board.service';
import { Board } from './entity/board.entity';

@Controller('board')
export class BoardsController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/')
  async findAll(): Promise<Board[]> {
    return await this.boardService.findAll();
  }
  @Get('seq/:sp_seq')
  async findOne(@Param('sp_seq') sp_seq: number): Promise<Board> {
    return await this.boardService.findOne(sp_seq);
  }
  @Get('type/:sp_type')
  async findType(@Param('sp_type') sp_type: string): Promise<Board[]> {
    return await this.boardService.findType(sp_type);
  }
}
