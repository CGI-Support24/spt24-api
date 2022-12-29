import { Support } from './entities/support.entity';
export declare class Spt24Service {
    private supports;
    getAll(): Support[];
    getOne(sp_seq: string): Support;
}
