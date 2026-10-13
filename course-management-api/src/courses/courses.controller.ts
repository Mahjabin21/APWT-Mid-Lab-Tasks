import { Controller, Get, Post, Put, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service.js';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }


  @Get()
  getALLCourses(): string {
    return this.coursesService.getAllCourses();
  }
  @Get(':id')
  getCoursesByID(@Param('id') id: string): string {
    return this.coursesService.getCourseByID(id);
  }

  @Post()
  createCourse(): string {
    return this.coursesService.createCourse();
  }

  @Put(':id')
  updateCourse(@Param('id') id: string): string {
    return this.coursesService.updateCourse(id);
  }

  @Patch(':id')
  patchCourse(@Param('id') id: string): string {
    return this.coursesService.patchCourse(id);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string): string {
    return this.coursesService.deleteCourse(id);
  }
}
