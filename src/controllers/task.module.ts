import { Module } from '@nestjs/common';
import { TaskOrchestrator } from 'src/application/orchestrators';
import { TaskController } from './task.controller';
import { TaskRepositoryImpl } from 'src/infrastructure/databases/repositories/task.repository';
import { CreateTaskUseCase } from 'src/application/usecases/task/createTask.usecase';
import { CreateNotificationUseCase } from 'src/application/usecases/notification/createNotification.usecase';
import { LogDecorator } from 'src/application/decorators/log.decorator';
import { AuthorizationDecorator } from 'src/application/decorators/authorizator.decorator';
import { NotificationStrategyFactory } from 'src/application/factories/notification-strategy.factory';
import { EmailNotificationStrategy } from 'src/domain/strategies/email-notification.strategy';
import { SmsNotificationStrategy } from 'src/domain/strategies/sms-notification.strategy';
import { PushNotificationStrategy } from 'src/domain/strategies/push-notification.strategy';
import { GetExternalTasksUseCase } from 'src/application/usecases/task/getExternalTask.usecase';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [
    LogDecorator,
    TaskOrchestrator,
    CreateTaskUseCase,
    CreateNotificationUseCase,
    AuthorizationDecorator,
    NotificationStrategyFactory,
    EmailNotificationStrategy,
    SmsNotificationStrategy,
    PushNotificationStrategy,
    GetExternalTasksUseCase,
    {
      provide: 'TaskRepository',
      useClass: TaskRepositoryImpl,
    },
  ],
  exports: [TaskOrchestrator],
})
export class TaskModule {}
