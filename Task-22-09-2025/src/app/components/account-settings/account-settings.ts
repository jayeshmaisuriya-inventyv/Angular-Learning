import { Component, inject } from '@angular/core';
import { UserBio } from "./user-profile/user-bio/user-bio";
import { PaymentInfo } from "./payment-info/payment-info";
import { UserService } from '../../share/user/user-service';
import { ParentProfile } from "./user-profile/parent-profile/parent-profile";

@Component({
  selector: 'app-account-settings',
  imports: [UserBio, PaymentInfo, ParentProfile],
  templateUrl: './account-settings.html',
  styleUrl: './account-settings.scss'
})
export class AccountSettings {
  userService = inject(UserService);
  user = this.userService.user;
  //customMessage = this.userService.customMessage;
}
