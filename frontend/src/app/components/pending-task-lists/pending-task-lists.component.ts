import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-pending-task-lists',
  templateUrl: './pending-task-lists.component.html',
  styleUrls: ['./pending-task-lists.component.css'],
})
export class PendingTaskListsComponent implements OnInit {

  @Input() taskList: Task[];
  constructor(private tasksService: TasksService, private router: Router) {}

  ngOnInit(): void {}

  setComplete(task: Task) {
    this.tasksService.changeState(task).subscribe(() => {
      task.active = false;
    });
  }

  delete(task: Task) {
    this.tasksService.delete(task.taskId).subscribe(() => {
      this.taskList = this.taskList.filter(({ taskId }) => taskId !== task.taskId);
    });
  }
}
