import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  username: string;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getAuth().subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
        this.username = user.email;
      } else {
        this.username = null;
        this.isLoggedIn = false;
      }
    });
  }

  logout(): void {
    this.loginService.signOut();
  }

}
