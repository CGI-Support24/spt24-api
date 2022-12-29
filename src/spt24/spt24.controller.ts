import { Controller, Get, Param, Query } from '@nestjs/common';
import { Support } from './entities/support.entity';
import { Spt24Service } from './spt24.service';

@Controller('spt24')
export class Spt24Controller {
  constructor(private readonly spt24Service: Spt24Service) {}

  @Get()
  getAll(): Support[] {
    return this.spt24Service.getAll();
  }

  @Get(':sp_seq')
  getOne(@Param('sp_seq') sp_seq: string): Support {
    return this.spt24Service.getOne(sp_seq);
  }
}
