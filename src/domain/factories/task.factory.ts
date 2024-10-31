import { Task } from "../entities/task.entity";

export class TaskFactory {
  static createTask(title: string, description: string): Task {
    const id = Math.random().toString();
    return new Task(id, title, description);
  }
}