import { tbl_site } from './tbl_site.entity';
import { tbl_support } from './tbl_support.entity';
export declare class tbl_member {
    mb_id: string;
    mb_pw: string;
    mb_name: string;
    mb_email: string;
    mb_gender: number;
    mb_age: number;
    site: tbl_site[] | null;
    support: tbl_support[] | null;
}
