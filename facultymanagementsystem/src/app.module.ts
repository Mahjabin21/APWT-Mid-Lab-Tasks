import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FacultiesModule } from './faculties/faculties.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "9012M@i",
      database: "faculties_db",
      autoLoadEntities: true,
      synchronize: true,
    }),
    FacultiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
