import { Component } from '@angular/core';
import { AddToCartService } from './Services/AddToCartService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AddToCartService],
})
export class AppComponent {
  title = 'angular-final-case';
}
