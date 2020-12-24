import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {

  task = new Task();
  constructor(private tasksService: TasksService, private router: Router) {}

  ngOnInit(): void {}

  addTask() {
    this.tasksService.create(this.task).subscribe((task) => {
      if (!task) {
        throw new Error();
      }
      console.log('created: ', task);
      // this.router.navigate(['home']);
    });
  }

}
