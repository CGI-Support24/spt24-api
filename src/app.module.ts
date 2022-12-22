import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';
import { ConfigModule } from '@nestjs/config';
import { AdminpageController } from './adminpage/adminpage.controller';
import { AdminpageService } from './adminpage/adminpage.service';
import { AdminpageModule } from "./adminpage/adminpage.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    ConfigModule.forRoot({
      isGlobal: true
    })],
  controllers: [AppController, AdminpageController],
  providers: [AppService, AdminpageService],
})

@Module({
  imports: [AdminpageModule],
  controllers: [],
  providers: []
})

export class AppModule {}