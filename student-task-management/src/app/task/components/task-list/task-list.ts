import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TaskService } from '../../service/task-service';
import { Task } from '../../interface/task';
import { StatusPipe } from '../../pipe/status-pipe';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, DatePipe, StatusPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {
  // Inject TaskService
  taskService = inject(TaskService);

  // Get all tasks
  get tasks(): Task[] {
    return this.taskService.getTasks();
  }
}
