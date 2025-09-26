import { Injectable, signal } from '@angular/core';
import { UserInterface } from '../interface/user-interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  defaultImage = 'assets/images/profile-img.jpg';
  private readonly _initialBio = 'Angular 20 learner & coffee addict.';
  private _user = signal<UserInterface>({
    id: 1,
    name: 'Jayesh Maisuriya',
    email: 'jayesh@example.com',
    profileImage: '',
    bio: this._initialBio,
    planName: 'Pro',
    customMessage: 'Thank your Plan Upgrade to',
    subscription: 'Premium', // ✅ set default
  });
  user = this._user.asReadonly();
  updateUser(user: Partial<UserInterface>) {
    this._user.update((u) => ({ ...u, ...user }));
  }

  updateUserImage(id: number, imageUrl: string) {
    if (this._user().id === id) {
      this._user.update((u) => ({ ...u, profileImage: imageUrl }));
    }
  }
  resetBioToDefault() {
    this._user.update((u) => ({ ...u, bio: this._initialBio }));
  }
}
