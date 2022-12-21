import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_qlf_detail',{ schema: 'support24' })
export class tbl_qlf_detail {

    @PrimaryGeneratedColumn({ type: 'int', name: 'sp_seq' })
    qlf_seq: number;

    @Column( { type: 'int', name: 'qlf_gender' })
    qlf_gender: number;

    @Column( { type: 'int', name: 'qlf_age' })
    qlf_age: number;

    @Column('varchar', { name: 'qlf_location', length: 20 })
    qlf_location: string;

    @Column( {type: 'int', name: 'qlf_emp' })
    qlf_emp: number;

    @Column( {type: 'int', name: 'qlf_emp' })
    qlf_sales: number;
    
    @Column( {type: Date, name: 'sp_finishat'})
    qlf_openat: Date;

    @Column( 'varchar', { name: 'sp_qualification', length: 4000 })
    qlf_ex: string;
    
    
}
