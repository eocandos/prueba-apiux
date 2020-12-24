import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taskList: Task[];
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.tasksService.getAllTasks().subscribe((tasks) => {
      this.taskList = tasks;
    });
  }

}
