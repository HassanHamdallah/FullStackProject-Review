export class Task {
  id: number;
  title: string;
  status: boolean;
  
  constructor(id: number, taskName: string, isDone: boolean = false) {
    this.id = id;
    this.title = taskName;
    this.status = isDone;
  }
}