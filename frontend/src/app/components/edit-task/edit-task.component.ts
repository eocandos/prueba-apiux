import { TasksService } from 'src/app/services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  task = new Task();
  taskId: number;
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.taskId = +this.route.snapshot.paramMap.get('task');
    if (this.taskId) {
      this.tasksService.getTask(this.taskId).subscribe((task) => {
        if (task) {
          this.task = task;
        }
      });
    }
  }

  updateTask() {
    this.tasksService.update(this.task).subscribe((task) => {
      if (!task) {
        throw new Error();
      }
      this.router.navigate(['home']);
    });
  }
}
