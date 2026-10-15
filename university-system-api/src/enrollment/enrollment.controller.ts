import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service.js';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService,

  ) { }

  @Get()
  getEnrollments() {
    return this.enrollmentService.getEnrollments();
  }
  @Post()
  enrollStudent(@Body() body: any) {
    const { studentName, courseId } = body;
    return this.enrollmentService.enrollStudent(studentName, courseId);

  }

}
