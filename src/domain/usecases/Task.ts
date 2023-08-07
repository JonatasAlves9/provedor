import {TaskListModel} from '@/domain/models/';

export interface Task {
  getListTask: () => Promise<TaskListModel[]>; // listar
  getTasksById: (id: string) => Promise<TaskListModel>; // pegar pelo ID
  createTask: (task: TaskListModel) => Promise<TaskListModel>; // Criar
  updateTask: (id: string, Task: TaskListModel) => Promise<TaskListModel>;
  deleteTask: (id: string) => Promise<void>;
}
