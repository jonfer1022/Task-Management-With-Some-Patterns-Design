import { Task } from "../entities/task.entity";

export interface TaskRepository {
  createTask(task: Task): Promise<Task>;
  getTaskById(id: string): Promise<Task | null>;
  updateTask(task: Task): Promise<Task>;
}