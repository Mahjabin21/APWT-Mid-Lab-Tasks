import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';


@Injectable()
export class EnrollmentService {
    constructor(private readonly courseService: CourseService,
        @Inject(forwardRef(() => NotificationService))
        private readonly notificationService: NotificationService,
    ) { }

    enrollStudent(studentName: string, courseId: string) {
        const course = this.courseService.getCourseById(courseId);

        return {
            message: "Student enrolled successfuly",
            studentName: studentName,
            course: course,
            notification: "You have enrolled successfully",
        }
    }

    getEnrollments() {
        return {
            message: "All enrollments fetched", data: [],
        }
    }


}
