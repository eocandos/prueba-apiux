import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';

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

}
