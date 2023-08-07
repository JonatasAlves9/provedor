import {CoursesModel} from '@/domain/models/courses-model';

export interface Courses {
  getListCourse: () => Promise<CoursesModel[]>;
  getCoursesById: (id: string) => Promise<CoursesModel>;
  createCourse: (course: CoursesModel) => Promise<CoursesModel>;
  updateCourse: (id: string, course: CoursesModel) => Promise<CoursesModel>;
  deleteCourse: (id: string) => Promise<void>;
}
