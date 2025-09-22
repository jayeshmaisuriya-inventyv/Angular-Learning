import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

}
export interface User {
  id: '01';
  name: 'Jayeshbhai Maisuriya';
  email: 'maisuriyajayesh@gmail.com';
  profilePic: '../../../../assets/images/profile-img.jpg';
  paln: 'premium';
  status: 'active';
  date: '2023-01-01'
}
