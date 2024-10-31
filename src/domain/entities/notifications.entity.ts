export class Notification {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public status: string,
  ) {}
}