import { tbl_support } from 'src/domain/tbl_support.entity';
export declare class AdminpageService {
    private supports;
    getAll(): tbl_support[];
    getOne(seq: number): tbl_support;
    deleteOne(seq: number): boolean;
    update(id: number, updateData: any): void;
    create(spData: any): void;
}
