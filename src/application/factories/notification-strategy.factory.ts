import { Injectable, Inject } from '@nestjs/common';
import { NotificationStrategy } from '../interfaces/notification-strategy.interface';
import { EmailNotificationStrategy } from 'src/domain/strategies/email-notification.strategy';
import { SmsNotificationStrategy } from 'src/domain/strategies/sms-notification.strategy';
import { PushNotificationStrategy } from 'src/domain/strategies/push-notification.strategy';

@Injectable()
export class NotificationStrategyFactory {
  constructor(
    @Inject(EmailNotificationStrategy) private emailStrategy: EmailNotificationStrategy,
    @Inject(SmsNotificationStrategy) private smsStrategy: SmsNotificationStrategy,
    @Inject(PushNotificationStrategy) private pushStrategy: PushNotificationStrategy,
  ) {}

  public getStrategy(strategyType: string): NotificationStrategy {
    switch (strategyType) {
      case 'email':
        return this.emailStrategy;
      case 'sms':
        return this.smsStrategy;
      case 'push':
        return this.pushStrategy;
      default:
        throw new Error(`Unknown strategy type: ${strategyType}`);
    }
  }
}