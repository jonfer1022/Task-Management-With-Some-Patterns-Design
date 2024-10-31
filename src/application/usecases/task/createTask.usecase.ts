import { Inject, Injectable } from '@nestjs/common';
// import { AuthorizationDecorator } from 'src/application/decorators/authorizator.decorator';
import { TaskFactory } from 'src/domain/factories/task.factory';
import { TaskRepository } from 'src/domain/interfaces/taskRepository.interface';

@Injectable()
export class CreateTaskUseCase {
  constructor(
    @Inject('TaskRepository')
    private readonly taskRepository: TaskRepository,
  ) {}

  async execute(title: string, description: string, userRole: string = 'admin') {
    const createTaskFn = async (title: string, description: string) => {
      const task = TaskFactory.createTask(title, description);
      return await this.taskRepository.createTask(task);
    };

    return await createTaskFn(title, description);
    // const authDecorator = new AuthorizationDecorator(userRole);
    // return await authDecorator.execute(createTaskFn)(title, description);
  }
}