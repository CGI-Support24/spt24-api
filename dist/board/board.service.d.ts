import { Board } from './entity/board.entity';
import { BoardRepository } from './entity/board.repository';
export declare class BoardService {
    private boardRepository;
    constructor(boardRepository: BoardRepository);
    findAll(): Promise<Board[]>;
    findOne(sp_seq: number): Promise<Board>;
    findType(sp_type: string): Promise<Board[]>;
}
