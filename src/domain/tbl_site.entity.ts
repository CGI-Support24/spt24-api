import { Column, Entity, PrimaryGeneratedColumn,JoinColumn, ManyToOne } from 'typeorm';
import { tbl_member } from './tbl_member.entity';

@Entity('tbl_site',{ schema: 'support24' })
export class tbl_site {

    @PrimaryGeneratedColumn({ type: 'int', name: 'site_seq' })
    site_seq: number;

    @Column('varchar', { name: 'site_name', length: 40 })
    site_name: string;

    @Column('varchar', { name: 'site_url', length: 400 })
    site_url: string;

    @Column('varchar', { name: 'site_owner', length: 40 })
    site_owner: string;

    @Column('varchar', { name: 'admin_id', length: 20 })
    admin_id: string;

    @ManyToOne(()=>tbl_member, (member)=>member.site)
    @JoinColumn({
        name: 'admin_id',
        referencedColumnName: 'mb_id'
    })
    member: tbl_member | null
    
}