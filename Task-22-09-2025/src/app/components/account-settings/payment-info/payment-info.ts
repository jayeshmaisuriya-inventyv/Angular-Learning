import { Component, inject } from '@angular/core';
import { UserService } from '../../../share/user/user-service';

@Component({
  selector: 'app-payment-info',
  imports: [],
  templateUrl: './payment-info.html',
  styleUrl: './payment-info.scss'
})
export class PaymentInfo {
  userService = inject(UserService);
  user = this.userService.user;


  toggleSubscription() {
    const current = this.user().subscription;
    const next = current === 'Premium' ? 'Basic' : 'Premium';
    this.userService.updateUser({ subscription: next });
  }
}
