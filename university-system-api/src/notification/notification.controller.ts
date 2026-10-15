//import { EnrollmentService } from './../enrollment/enrollment.service.js';
import { Controller, Body, Post } from '@nestjs/common';
import { NotificationService } from './notification.service.js';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }

  @Post('send')
  sendNotification(@Body() body: any) {
    const { studentName, message } = body;
    return this.notificationService.sendNotification(studentName, message);
  }

  @Post('check')
  checkEnrollmentAndNotify(@Body() body: any) {
    const { studentName, courseId } = body;
    return this.notificationService.checkEnrollmentAndNotify(studentName, courseId);
  }


}
