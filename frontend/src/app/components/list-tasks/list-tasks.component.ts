import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  taskList: Task[];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.tasksService.getAllTasks().subscribe((tasks) => {
      this.taskList = tasks;
      console.log('COMP tasks: ', this.taskList);
    });
  }
}
