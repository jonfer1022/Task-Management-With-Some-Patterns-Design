export interface NotificationStrategy {
  sendNotification(taskId: string, message: string): Promise<void>;
}