import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from 'src/application/interfaces/notification-strategy.interface';

@Injectable()
export class SmsNotificationStrategy implements NotificationStrategy {
  async sendNotification(taskId: string, message: string): Promise<void> {
    console.log(`Sending SMS notification for task ${taskId}: ${message}`);
    // Lógica para enviar SMS (usando alguna API de SMS como Twilio)
  }
}