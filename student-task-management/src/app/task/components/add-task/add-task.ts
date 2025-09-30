import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../service/task-service';
import { Task } from '../../interface/task';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTask {
  // Inject TaskService to manage tasks
  taskService = inject(TaskService);

  // Fields for new task input
  newTaskTitle = 'Jayesh'; // Title for new task
  newTaskDescription = 'jayesh angular developer'; // Description for new task
  // Default due date is today in yyyy-MM-dd format
  newTaskDueDate: string = new Date().toISOString().slice(0, 10);

  // Adds a new task to the service using the input fields
  // Adds a new task if title and due date are provided
  addTask() {
    if (!this.newTaskTitle || !this.newTaskDueDate) return; // Validate input
    // Add task to service
    this.taskService.addTask({
      id: Date.now(), // Unique id
      title: this.newTaskTitle,
      description: this.newTaskDescription,
      dueDate: new Date(this.newTaskDueDate),
      completed: false
    });
    // Reset input fields
    this.newTaskTitle = '';
    this.newTaskDescription = '';
    this.newTaskDueDate = '';
  }
}
