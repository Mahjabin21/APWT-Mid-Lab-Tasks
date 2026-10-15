import { forwardRef, Module } from '@nestjs/common';
import { NotificationService } from './notification.service.js';
import { NotificationController } from './notification.controller.js';
import { EnrollmentModule } from '../enrollment/enrollment.module.js';

@Module({
  imports: [forwardRef(() => EnrollmentModule),],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule { }
