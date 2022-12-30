import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_support')
export class Board {
  @PrimaryGeneratedColumn()
  sp_seq: number;

  @Column()
  sp_name: string;

  @Column()
  sp_type: string;

  @Column()
  sp_size: string;

  @Column()
  sp_startat: string;

  @Column()
  sp_finishat: string;

  @Column()
  sp_qualification: string;

  @Column()
  sp_url: string;

  @Column()
  admin_id: string;

  @Column()
  sp_src: string;
}
