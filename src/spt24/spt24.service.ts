import { Injectable } from '@nestjs/common';
import { Support } from './entities/support.entity';

@Injectable()
export class Spt24Service {
  private supports: Support[] = [];

  getAll(): Support[] {
    return this.supports;
  }

  getOne(sp_seq: string): Support {
    return this.supports.find((support) => support.sp_seq === parseInt(sp_seq));
  }
}
