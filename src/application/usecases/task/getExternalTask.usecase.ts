import { Injectable } from '@nestjs/common';
import { ExternalTaskAdapter } from 'src/application/adapters/externalTask.adapter';
import { ITask } from 'src/domain/interfaces/task.interface';

@Injectable()
export class GetExternalTasksUseCase {
  private adapter: ExternalTaskAdapter;

  constructor() {
    this.adapter = new ExternalTaskAdapter();
  }

  public execute(): ITask[] {
    // We use the adapter to get the tasks in the correct format
    let tasks: ITask[] = this.adapter.getTasks();
    return tasks;
  }
}