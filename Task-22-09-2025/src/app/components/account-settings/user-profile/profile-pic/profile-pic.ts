import { Component, inject, Input, SimpleChanges, OnChanges  } from '@angular/core';
import { UserService } from '../../../../share/user/user-service';

@Component({
  selector: 'app-profile-pic',
  imports: [],
  templateUrl: './profile-pic.html',
  styleUrl: './profile-pic.scss',
})
export class ProfilePic implements OnChanges {

  @Input() userName: string = '';

  userService = inject(UserService);
  user = this.userService.user;
  defaultImage = this.userService.defaultImage;

  updateProfile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.userService.updateUserImage(this.user().id, reader.result as string);
      };

      reader.readAsDataURL(file); // ✅ Angular 20 safe
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userName']) {
      console.log('ngOnChanges: userName changed from',
                  changes['userName'].previousValue,
                  'to',
                  changes['userName'].currentValue);
    }
  }
}
