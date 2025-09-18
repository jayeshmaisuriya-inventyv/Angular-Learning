import { Component } from '@angular/core';
import { ProfilePic } from "./profile-pic/profile-pic";
import { UserBio } from "./user-bio/user-bio";

@Component({
  selector: 'app-user-profile',
  imports: [ProfilePic, UserBio],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss'
})
export class UserProfile {

}
