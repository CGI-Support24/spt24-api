import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './board/board.module';
import { Board } from './board/entity/board.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'project-db-stu.ddns.net',
      port: 3307,
      username: 'support24',
      password: 'support24',
      database: 'support24',
      entities: [Board],
      synchronize: false,
    }),
    BoardModule,
  ],
})
export class AppModule {}
