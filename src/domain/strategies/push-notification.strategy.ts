import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from 'src/application/interfaces/notification-strategy.interface';

@Injectable()
export class PushNotificationStrategy implements NotificationStrategy {
  async sendNotification(taskId: string, message: string): Promise<void> {
    console.log(`Sending push notification for task ${taskId}: ${message}`);
    // Lógica para enviar notificación push (usando algún servicio como Firebase Cloud Messaging)
  }
}