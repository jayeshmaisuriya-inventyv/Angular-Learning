import { Component } from '@angular/core';
import { UserProfile } from "./user-profile/user-profile";
import { PaymentInfo } from "./payment-info/payment-info";

@Component({
  selector: 'app-account-settings',
  imports: [UserProfile, PaymentInfo],
  templateUrl: './account-settings.html',
  styleUrl: './account-settings.scss'
})
export class AccountSettings {

}
