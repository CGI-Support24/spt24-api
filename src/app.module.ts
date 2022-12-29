import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';
import { ConfigModule } from '@nestjs/config';
import { Spt24Controller } from './spt24/spt24.controller';
import { Spt24Service } from './spt24/spt24.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [Spt24Controller],
  providers: [Spt24Service],
})
export class AppModule {}
