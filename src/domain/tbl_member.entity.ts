import { Column, Entity,OneToMany, } from 'typeorm';
import { tbl_site } from './tbl_site.entity';
import { tbl_support } from './tbl_support.entity';

@Entity('tbl_member',{ schema: 'support24' })
export class tbl_member {
 
    @Column('varchar', { primary: true, name: 'mb_id', length: 20 })
    mb_id: string;

    @Column('varchar', { name: 'mb_pw', length: 20 })
    mb_pw: string;

    @Column('varchar', { name: 'mb_name', length: 20 })
    mb_name: string;

    @Column('varchar', { name: 'mb_email', length: 40 })
    mb_email: string;

    @OneToMany(()=>tbl_site, (site)=>site.admin_id)
    site: tbl_site[] | null

    @OneToMany(()=>tbl_support, (support)=>support.admin_id)
    support: tbl_support[] | null

    
}


