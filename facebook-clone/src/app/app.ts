import { Component } from '@angular/core';
import { FacebookPage } from './facebook-page/facebook-page';

@Component({
  selector: 'app-root',
  imports: [FacebookPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
