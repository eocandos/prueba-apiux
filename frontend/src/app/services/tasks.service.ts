import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private taskUrl = `${apiUrl}/task`;

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<any> {
    const url = `${this.taskUrl}`;
    return this.http.get(url).pipe();
  }

  create(task: Task): Observable<Task> {
    const url = `${this.taskUrl}`;
    return this.http.post<Task>(url, task);
  }

  getTask(id: number): Observable<Task> {
    const url = `${this.taskUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      catchError((_) => {
        console.log('Get Task Failed');
        return of(new Task());
      })
    );
  }

  update(task: Task): Observable<Task> {
    const url = `${this.taskUrl}/${task.taskId}/edit`;
    return this.http.put<Task>(url, task);
  }

  changeState(task: Task): Observable<Task> {
    const url = `${this.taskUrl}/${task.taskId}/change-state`;
    return this.http.put<Task>(url, null);
  }


  delete(taskId: number): Observable<any> {
    const url = `${this.taskUrl}/${taskId}`;
    return this.http.delete(url);
  }
}
