import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from 'src/application/interfaces/notification-strategy.interface';

@Injectable()
export class EmailNotificationStrategy implements NotificationStrategy {
  async sendNotification(taskId: string, message: string): Promise<void> {
    console.log(`Sending email notification for task ${taskId}: ${message}`);
    // Lógica para enviar email (usando alguna biblioteca como nodemailer)
  }
}