import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoItemComponent } from '../todo-item-component/todo-item-component';
import { FormsModule } from '@angular/forms';
import { Task } from '../../module/task';
import { TodoService } from '../../service/todo-service';

@Component({
  imports: [TodoItemComponent, FormsModule],
  selector: 'app-todo-list-component',
  styleUrl: './todo-list-component.css',
  templateUrl: './todo-list-component.html',
})
export class TodoListComponent implements OnInit {
  taskTitle: string = "";
  taskList = signal<Task[]>([]);
  service = inject(TodoService);

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.service.getAllTasks().subscribe((res) => {
      this.taskList.set(res);
    });
  }

  addTask() {
    const title = this.taskTitle.trim();
    if (!title) return;

    this.service.addTask(title, false).subscribe((newTask) => {
      this.taskList.update(list => [...list, newTask]);
      this.taskTitle = "";
    });
  }

  onDeleteTask(id: number) {
    this.service.deleteTask(id).subscribe(() => {
      this.taskList.update(list => list.filter(t => t.id !== id));
    });
  }

  onToggleStatus(task: Task) {
    const updatedStatus = !task.status;
    this.service.updateTask(task.id, task.title, updatedStatus).subscribe((updatedTask) => {
      this.taskList.update(list =>
        list.map(t => t.id === task.id ? updatedTask : t)
      );
    });
  }
}