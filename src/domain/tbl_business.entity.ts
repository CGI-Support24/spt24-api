import { Column, Entity, OneToOne, JoinColumn,PrimaryGeneratedColumn } from 'typeorm';
import { tbl_member } from './tbl_member.entity';

@Entity('tbl_business', { schema: 'support24' })
export class tbl_business {

    @PrimaryGeneratedColumn({ type: 'int', name: 'bs_seq' })
    bs_seq: number;

    @Column('varchar', { name: 'mb_id', length: 20 })
    mb_id: string;

    @Column('varchar', { name: 'bs_name', length: 20 })
    bs_name: string;

    @Column('varchar', { name: 'bs_location', length: 400 })
    bs_location: string;

    @Column('varchar', { name: 'bs_type', length: 20 })
    bs_type: string;

    @Column('varchar', { name: 'bs_count', length: 20 })
    bs_count: string;

    @Column({ name: 'bs_opendate' })
    bs_opendate: Date;

    @OneToOne(()=>tbl_member, (member)=>member.mb_id)
    @JoinColumn()
    member=tbl_member;
}