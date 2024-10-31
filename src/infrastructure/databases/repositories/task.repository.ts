import { Injectable } from '@nestjs/common';
import { Task } from 'src/domain/entities/task.entity';
import { TaskRepository } from 'src/domain/interfaces/taskRepository.interface';

@Injectable()
export class TaskRepositoryImpl implements TaskRepository {
  private tasks: Task[] = [];

  async createTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

  async getTaskById(id: string): Promise<Task | null> {
    return this.tasks.find(task => task.id === id) || null;
  }

  async updateTask(task: Task): Promise<Task> {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index > -1) {
      this.tasks[index] = task;
      return task;
    }
    return null;
  }
}