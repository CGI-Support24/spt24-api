import { tbl_member } from './tbl_member.entity';
export declare class tbl_business {
    bs_seq: number;
    mb_id: string;
    bs_name: string;
    bs_location: string;
    bs_type: string;
    bs_count: string;
    bs_opendate: Date;
    member: typeof tbl_member;
}
