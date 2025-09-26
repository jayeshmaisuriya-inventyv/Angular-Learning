import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountSettings } from "./components/account-settings/account-settings";

@Component({
  selector: 'app-root',
  imports: [AccountSettings],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Task-22-09-2025');
}
