import { tbl_member } from './tbl_member.entity';
export declare class tbl_site {
    site_seq: number;
    site_name: string;
    site_url: string;
    site_owner: string;
    admin_id: string;
    member: tbl_member | null;
}
