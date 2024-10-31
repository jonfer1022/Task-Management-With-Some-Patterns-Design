import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/infrastructure/logging/logger.service';

@Injectable()
export class LogDecorator {
  private loggerService: LoggerService;

  constructor() {
    this.loggerService = LoggerService.getInstance();
  }

  execute(fn: Function) {
    return async (...args: any[]) => {
      this.loggerService.log(`--> EXECUTING function: ${fn.name} with arguments: ${JSON.stringify(args)}`);
      const result = await fn(...args);
      this.loggerService.log(`--> RESULT: ${JSON.stringify(result)}`);
      return result;
    };
  }
}