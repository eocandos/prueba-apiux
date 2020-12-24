import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-ready-task-lists',
  templateUrl: './ready-task-lists.component.html',
  styleUrls: ['./ready-task-lists.component.css'],
})
export class ReadyTaskListsComponent implements OnInit {

  @Input() taskList: Task[];
  constructor(private tasksService: TasksService, private router: Router) {}

  ngOnInit(): void { }

  setIncomplete(task: Task) {
    this.tasksService.changeState(task).subscribe(() => {
      task.active = true;
    });
  }

  delete(task: Task) {
    this.tasksService.delete(task.taskId).subscribe(() => {
      this.taskList = this.taskList.filter(({ taskId }) => taskId !== task.taskId);
    });
  }
}
