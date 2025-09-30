import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  // Transforms a due date and completed flag to 'Completed', 'Pending', or 'Overdue' status
  transform(dueDate: Date, completed?: boolean): string {
    if (completed) {
      return 'Completed';
    }
    const now = new Date();
    const date = new Date(dueDate);
    // Compare only the date part, ignore time
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const due = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if (due <= today) {
      return 'Overdue';
    }
    return 'Pending';
  }

}
