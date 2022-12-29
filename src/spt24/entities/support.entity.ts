import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tbl_support {
  @PrimaryGeneratedColumn()
  sp_seq: number;

  @Column()
  sp_name: string;

  @Column()
  sp_field: string;
}
