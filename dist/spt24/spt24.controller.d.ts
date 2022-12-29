import { Support } from './entities/support.entity';
import { Spt24Service } from './spt24.service';
export declare class Spt24Controller {
    private readonly spt24Service;
    constructor(spt24Service: Spt24Service);
    getAll(): Support[];
    getOne(sp_seq: string): Support;
}
