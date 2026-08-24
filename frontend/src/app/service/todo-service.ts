import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../module/task';

@Injectable({ providedIn: 'root' })
export class TodoService {

  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/tasks';

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  addTask(title: string, status: boolean): Observable<Task> {
    const params = new HttpParams()
      .set('title', title)
      .set('status', status);
    return this.http.post<Task>(this.baseUrl, null, { params });
  }

  updateTask(id: number, title: string, status: boolean): Observable<Task> {
    const params = new HttpParams()
      .set('title', title)
      .set('status', status);
    return this.http.put<Task>(`${this.baseUrl}/${id}`, null, { params });
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl+"/"+id);
  }
}