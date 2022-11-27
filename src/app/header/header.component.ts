import { Component, OnChanges } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnChanges {
  loggedIn: boolean;

  constructor(private authService: AuthService) {}

  ngOnChanges(): void {
    this.loggedIn = this.authService.loggedIn;
  }
}
