export class Task {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public completed: boolean = false
  ) {}

  markComplete() {
    this.completed = true;
  }
}