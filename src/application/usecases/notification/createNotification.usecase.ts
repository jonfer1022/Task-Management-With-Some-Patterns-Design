import { Injectable } from "@nestjs/common";
import { NotificationFactory } from "src/domain/factories/notification.factory";

@Injectable()
export class CreateNotificationUseCase {
  // constructor(private readonly taskRepository: TaskRepository) {}

  async execute(title: string, description: string) {
    const notification = NotificationFactory.createNotification(title, description);
    return notification;
  }
}