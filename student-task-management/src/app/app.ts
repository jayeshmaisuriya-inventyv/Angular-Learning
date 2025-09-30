import { Component, signal } from '@angular/core';
import { AddTask } from "./task/components/add-task/add-task";
import { TaskList } from "./task/components/task-list/task-list";

@Component({
  selector: 'app-root',
  imports: [AddTask, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('student-task-management');
}
