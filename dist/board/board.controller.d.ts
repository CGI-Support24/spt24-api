import { BoardService } from './board.service';
import { Board } from './entity/board.entity';
export declare class BoardsController {
    private readonly boardService;
    constructor(boardService: BoardService);
    findAll(): Promise<Board[]>;
    findOne(sp_seq: number): Promise<Board>;
    findType(sp_type: string): Promise<Board[]>;
}
