import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../module/task';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-todo-item-component',
  styleUrl: './todo-item-component.css',
  templateUrl: './todo-item-component.html',
})
export class TodoItemComponent {
  @Input() task: Task = new Task(0, "", false);

  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleStatus = new EventEmitter<Task>();

  onDelete() {
    this.deleteTask.emit(this.task.id);
  }

  onToggle() {
    this.toggleStatus.emit(this.task);
  }
}