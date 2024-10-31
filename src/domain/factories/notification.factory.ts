import { Notification } from "../entities/notifications.entity";

export class NotificationFactory {
  static createNotification(title: string, description: string, status: string = 'pending'): Notification {
    const id = Math.random().toString();
    return new Notification(id, title, description, status);
  }
}