import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  private tasks: Task[] = [];

  idcounter = 1;

  addTask(task: Task) {
    task.id = this.idcounter++;
    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  completeTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
    }
  }
}
