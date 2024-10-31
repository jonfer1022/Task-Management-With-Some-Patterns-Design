import { UnauthorizedException } from '@nestjs/common';

export class AuthorizationDecorator {
  constructor(private readonly userRole: string) {}

  execute(fn: Function) {
    return async (...args: any[]) => {
      if (this.userRole !== 'admin') {
        throw new UnauthorizedException('User does not have permission to do the action');
      }
      return await fn(...args);
    };
  }
}