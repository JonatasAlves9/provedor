import {type HttpClient, HttpStatusCode} from '@/data/protocols/http/';
import {Task} from '@/domain/usecases/Task';
import {TaskListModel} from '@/domain/models/taskList-model';
import {InvalidCredentialsError, UnexpectedError} from '@/domain/errors';

export class RemoteTasks implements Task {
  constructor(private readonly url: string, private readonly httpClient) {}

  async getListTask(): Promise<TaskListModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        return httpResponse.body;
    }
  }

  async createTask(task: TaskListModel): Promise<TaskListModel> {
    const client = this.httpClient as HttpClient<TaskListModel>;
    const httpResponse = await client.request({
      method: 'post',
      url: this.url,
      body: task,
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

  async updateTask(id: string, task: TaskListModel): Promise<TaskListModel> {
    const client = this.httpClient as HttpClient<TaskListModel>;

    const httpResponse = await client.request({
      method: 'put',
      url: `${this.url}/${id}`,
      body: task,
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

  async deleteTask(id: string): Promise<void> {
    const client = this.httpClient as HttpClient<TaskListModel>;

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

  async getTasksById(id: string): Promise<TaskListModel> {
    const client = this.httpClient as HttpClient<TaskListModel>;

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
}
