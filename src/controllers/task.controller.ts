import { Controller, Delete, Get, Param, Post, Body } from '@nestjs/common';
import { TaskOrchestrator } from 'src/application/orchestrators';

@Controller('tasks')
export class TaskController {
  constructor(
    private taskOrchestrator: TaskOrchestrator,
  ) {}

  @Post()
  async createTask(@Body('title') title: string, @Body('description') description: string) {
    return await this.taskOrchestrator.createTaskAndNotify(title, description);
  }

  @Get('external')
  async getExternalTasks() {
    return await this.taskOrchestrator.getExternalTasks();
  }
}