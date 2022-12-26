import { tbl_support } from "../domain/tbl_support.entity";
import { AdminpageService } from "./adminpage.service";
export declare class AdminpageController {
    private readonly adminpageService;
    constructor(adminpageService: AdminpageService);
    getAll(): tbl_support[];
    getOne(sp_seq: number): tbl_support;
    remove(sp_seq: number): boolean;
    patch(sp_seq: number, updateData: any): void;
    create(spData: any): void;
}
