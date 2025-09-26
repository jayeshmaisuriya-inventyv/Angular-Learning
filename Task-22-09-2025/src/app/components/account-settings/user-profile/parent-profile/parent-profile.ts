import { Component } from '@angular/core';
import { ProfilePic } from "../profile-pic/profile-pic";

@Component({
  selector: 'app-parent-profile',
  imports: [ProfilePic],
  templateUrl: './parent-profile.html',
  styleUrl: './parent-profile.scss'
})
export class ParentProfile {
parentUserName = 'Jayesh';
changeName() {
  this.parentUserName = this.parentUserName === 'Jayesh' ? 'Maisuriya  Jayesh' : 'Jayesh Maisuriya';
}
}
