import { Module, forwardRef } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service.js';
import { EnrollmentController } from './enrollment.controller.js';
import { CourseModule } from '../course/course.module.js';
import { NotificationModule } from '../notification/notification.module.js';

@Module({
  imports: [
    CourseModule,
    forwardRef(() => NotificationModule),
  ],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  exports: [EnrollmentService],
})
export class EnrollmentModule { }
