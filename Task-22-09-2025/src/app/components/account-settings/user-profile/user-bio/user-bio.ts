import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../../../share/user/user-service';

@Component({
  selector: 'app-user-bio',
  imports: [],
  templateUrl: './user-bio.html',
  styleUrl: './user-bio.scss',
})
export class UserBio {
  private userService = inject(UserService);
  user = this.userService.user; // This is a signal
  get bio(): string {
    return this.user()?.bio ?? '';
  }

  onBioChange(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.userService.updateUser({ bio: value });
  }
  onReset(): void {
  this.userService.resetBioToDefault();
}
}
