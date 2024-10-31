export class ExternalTaskAPI {
  getTasks() {
    // We simulate a response from an external API with a different format
    return [
      { task_title: 'External Task 1', task_desc: 'Description of Task 1' },
      { task_title: 'External Task 2', task_desc: 'Description of Task 2' },
    ];
  }
}