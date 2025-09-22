import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountSettings } from './components/account-settings/account-settings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccountSettings],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-training');
  protected readonly customTitles = signal('Custom Title');

  constructor() {
    this.customTitless();
  }
  customTitless() {
    this.customTitles.set('Custom Title jayesh');
  }
}
