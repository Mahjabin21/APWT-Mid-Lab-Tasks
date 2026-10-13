import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service.js';
import { CoursesController } from './courses.controller.js';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule { }
