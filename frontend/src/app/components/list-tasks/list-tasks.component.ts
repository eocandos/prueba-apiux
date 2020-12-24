import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  taskList: Task[];

  constructor(private tasksService: TasksService, private router: Router) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.tasksService.getAllTasks().subscribe((tasks) => {
      this.taskList = tasks;
      console.log('COMP tasks: ', this.taskList);
    });
  }

  delete(taskId: number) {
    this.tasksService.delete(taskId).subscribe(() => {
      this.router.navigate(['home']);
    });
  }
}
