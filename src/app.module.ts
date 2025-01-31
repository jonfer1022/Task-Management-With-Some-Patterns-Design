import { Module } from '@nestjs/common';
import { TaskModule } from './controllers/task.module';

@Module({
  imports: [TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
