import { ITask } from 'src/domain/interfaces/task.interface';
import { ExternalTaskAPI } from 'src/infrastructure/external/externalTask';

export class ExternalTaskAdapter {
  private externalAPI: ExternalTaskAPI;

  constructor() {
    this.externalAPI = new ExternalTaskAPI();
  }

  public getTasks(): ITask[] {
    const externalTasks = this.externalAPI.getTasks();
    // We adapt the external tasks to the expected format
    return externalTasks.map(task => ({
      title: task.task_title,
      description: task.task_desc,
    }));
  }
}