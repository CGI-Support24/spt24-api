import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_crawling',{ schema: 'support24' })
export class tbl_crawling {

    @PrimaryGeneratedColumn({ type: 'int', name: 'crl_seq' })
    crl_seq: number;

    @Column('varchar',{name: 'crl_contents', length: 4000})
    crl_contents: String;

    @Column( {type: Date, name: 'crl_createdat' })
    crl_createdat: Date;

}