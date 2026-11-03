import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { FacultiesController } from './faculties.controller.js';

@Module({
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule {}
