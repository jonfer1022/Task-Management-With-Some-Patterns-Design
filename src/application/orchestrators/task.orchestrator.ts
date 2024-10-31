import { Injectable } from "@nestjs/common";
import { CreateNotificationUseCase } from "../usecases/notification/createNotification.usecase";
import { CreateTaskUseCase } from "../usecases/task/createTask.usecase";
import { LogDecorator } from "../decorators/log.decorator";
import { NotificationStrategyFactory } from "../factories/notification-strategy.factory";
import { GetExternalTasksUseCase } from "../usecases/task/getExternalTask.usecase";

@Injectable()
export class TaskOrchestrator {
  constructor(
    private logDecorator: LogDecorator,
    private createTaskUseCase: CreateTaskUseCase,
    private createNotificationUseCase: CreateNotificationUseCase,
    private notificationStrategyFactory: NotificationStrategyFactory,
    private getExternalTasksUseCase: GetExternalTasksUseCase
  ) {}

  async createTaskAndNotify(title: string, description: string, strategyType: string = 'email') {
    return this.logDecorator.execute(async() => {
      const task = await this.createTaskUseCase.execute(title, description);
      await this.createNotificationUseCase.execute(task.title, task.description);

      const strategy = this.notificationStrategyFactory.getStrategy(strategyType);
      await strategy.sendNotification(task.id, `Task ${title} created successfully!`);

      return task;
    })(title, description);
  }

  async getExternalTasks() {
    return this.logDecorator.execute(async() => this.getExternalTasksUseCase.execute())();
  }
}