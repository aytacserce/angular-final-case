import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  allUsers: User[] = [];

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  onUserSignup(users: {
    uName: string;
    uSurname: string;
    uEmail: string;
    uPassword: string;
  }) {
    this.http
      .post(
        'https://product-list-e6cbb-default-rtdb.firebaseio.com/users.json',
        users
      )
      .subscribe((response) => {
        // console.log(response);
      });
  }

  private fetchUsers() {
    this.http
      .get('https://product-list-e6cbb-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map((response) => {
          const users: any[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              users.push({ ...response[key], id: key });
            }
          }
          return users;
        })
      )
      .subscribe((users) => {
        console.log(users);
        this.allUsers = users;
      });
  }

  loginCheck: boolean = false;

  onUserLogin(user: { checkEmail: string; checkPassword: string }) {
    for (let u of this.allUsers) {
      if (user.checkEmail === u.uEmail && user.checkPassword === u.uPassword) {
        this.loginCheck = true;
      }
    }
  }

  loginChecked() {
    if (this.loginCheck) {
      this.authService.login();
      alert('Giriş başarılı. Ana sayfaya yönlendiriliyorsunuz.');
    } else {
      alert('Email ve/veya şifre hatalı.');
    }
  }

  redirectHome() {
    setTimeout(() => this.route.navigate(['Home']), 3000);
  }

  removeLogin() {}
}