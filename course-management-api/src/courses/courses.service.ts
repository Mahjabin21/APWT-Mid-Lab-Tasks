import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {

    getAllCourses(): string {
        return `Get all courses - from Service`;
    }
    getCourseByID(id: string): string {
        return `Get courses with id: ${id} - from Service`;
    }
    createCourse(): string {
        return `Create Course - from Service`;
    }
    updateCourse(id: string): string {
        return `Update course ${id} - from Service`;
    }
    patchCourse(id: string): string {
        return `Patch course ${id} - from Service`;
    }
    deleteCourse(id: string): string {
        return `Delete course ${id} - from Service`;
    }
}
