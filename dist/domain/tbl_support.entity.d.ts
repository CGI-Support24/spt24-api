import { tbl_member } from './tbl_member.entity';
export declare class tbl_support {
    sp_seq: number;
    sp_name: string;
    sp_field: string;
    sp_size: string;
    sp_startat: Date;
    sp_finishat: Date;
    sp_qualification: number;
    sp_url: string;
    sp_src: string;
    admin_id: string;
    member: tbl_member | null;
}
