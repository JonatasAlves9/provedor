import {type HttpClient, HttpStatusCode} from '@/data/protocols/http/';
import {Courses} from '@/domain/usecases/';
import {CoursesModel} from '@/domain/models';
import {InvalidCredentialsError, UnexpectedError} from '@/domain/errors';

export class RemoteCourses implements Courses {
  constructor(private readonly url: string, private readonly httpClient) {}

  async getListCourse(): Promise<CoursesModel[]> {
    const client = this.httpClient as HttpClient<CoursesModel[]>;
    const httpResponse = await client.request({
      method: 'get',
      url: this.url,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }

  async getCoursesById(id: string): Promise<CoursesModel> {
    const client = this.httpClient as HttpClient<CoursesModel>;
    const httpResponse = await client.request({
      method: 'get',
      url: `${this.url}/${id}`,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }

  async createCourse(courses: CoursesModel): Promise<CoursesModel> {
    const client = this.httpClient as HttpClient<CoursesModel>;

    const httpResponse = await client.request({
      method: 'post',
      url: this.url,
      body: courses,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.created:
        return httpResponse.body;
      case HttpStatusCode.ok:
        return httpResponse.body;

      default:
        throw new UnexpectedError();
    }
  }

  async updateCourse(id: string, courses: CoursesModel): Promise<CoursesModel> {
    const client = this.httpClient as HttpClient<CoursesModel>;

    const httpResponse = await client.request({
      method: 'put',
      url: `${this.url}/${id}`,
      body: courses,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }

  async deleteCourse(id: string): Promise<void> {
    const client = this.httpClient as HttpClient<CoursesModel>;

    const httpResponse = await client.request({
      method: 'delete',
      url: `${this.url}/${id}`,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return;
      default:
        throw new UnexpectedError();
    }
  }
}
