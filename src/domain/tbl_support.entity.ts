import { Column, Entity, PrimaryGeneratedColumn,JoinColumn, ManyToOne } from 'typeorm';
import { tbl_member } from './tbl_member.entity';

@Entity('tbl_support',{ schema: 'support24' })
export class tbl_support {

    @PrimaryGeneratedColumn({ type: 'int', name: 'sp_seq' })
    sp_seq: number;

    @Column('varchar', { name: 'sp_name', length: 40 })
    sp_name: string;

    @Column('varchar', { name: 'sp_field', length: 400 })
    sp_field: string;

    @Column('varchar', { name: 'sp_size', length: 40 })
    sp_size: string;

    @Column('varchar', { name: 'sp_startat'})
    sp_startat: Date;
    
    @Column('varchar', { name: 'sp_finishat'})
    sp_finishat: Date;

    @Column('varchar', { name: 'sp_qualification', length: 4000 })
    sp_qualification: string;

    @Column('varchar', { name: 'sp_url', length: 400 })
    sp_url: string;    

    @Column('varchar', { name: 'admin_id', length: 20 })
    admin_id: string;

    @ManyToOne(()=>tbl_member, (member)=>member.support)
    @JoinColumn({ 
        name: 'admin_id',
        referencedColumnName: 'mb_id'
    })
    member: tbl_member | null
    
}