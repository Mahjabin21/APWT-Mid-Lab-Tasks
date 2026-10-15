import { Controller, Get, Post, Put, Patch, Param, Delete, Body, BadRequestException, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CoursesService } from './courses.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course-dto.js';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }


  @Get()
  getALLCourses() {
    return this.coursesService.getAllCourses();
  }
  @Get(':id')
  getCoursesByID(@Param('id') id: string) {
    return this.coursesService.getCourseByID(id);
  }

  @Post()
  createCourse(@Body() dto: CreateCourseDto) {
    return this.coursesService.createCourse(dto);
  }

  @Put(':id')
  updateCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    return this.coursesService.updateCourse(id, dto);
  }

  @Patch(':id')
  patchCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    return this.coursesService.patchCourse(id, dto);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.coursesService.deleteCourse(id);
  }

  @Post(':id/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads',
      limits: {
        fileSize: 2 * 1024 * 1024,
      },
      fileFilter: (_req, file, callback) => {
        const allowed = /\.(jpg|jpeg|png|pdf)$/i.test(file.originalname);

        if (!allowed) {
          return callback(
            new BadRequestException(
              'Only JPG, JPEG, PNG, and PDF files are allowed',
            ),
            false,
          );
        }

        callback(null, true);
      },
    }),
  )
  uploadCourseMaterial(
    @Param('id') id: string, @UploadedFile() file: any,) {
    if (!file) {
      throw new BadRequestException('Please upload a valid file');
    }

    return {
      message: 'Material uploaded successfully',
      courseId: id,
      filename: file.filename,
      path: file.path.replace(/\\/g, '/'),
    };
  }

}
