import { Injectable, NotFoundException } from '@nestjs/common';
import { tbl_support } from 'src/domain/tbl_support.entity';

@Injectable()
export class AdminpageService {
    private supports: tbl_support[] =[];

getAll(): tbl_support[] {
    return this.supports;
  }

  getOne(seq: number): tbl_support {
    const support = this.supports.find(support => support.sp_seq === Number(seq));
    if (!support) {
        throw new NotFoundException(`${seq} not found`);
    }
    return support;
  }

  deleteOne(seq: number): boolean {
    this.getOne(seq);
    this.supports = this.supports.filter(support => support.sp_seq !== Number(seq));
    return true;
  }
  
  update(id: number, updateData: any) {
    const support = this.getOne(id);
    this.deleteOne(id);
    this.supports.push({ ...support, ...updateData });
  }
}