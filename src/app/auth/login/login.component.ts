import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.message = this.getMessage();
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe((response: any) => {
      console.log(response);
      this.message = this.getMessage();
      if (response.messageType === 0) {
        localStorage.setItem('__aa_token', response.data.token);
        localStorage.setItem('__aa_user', response.data.name);
        localStorage.setItem('__aa_user_id', response.data.id);
        localStorage.setItem('__aa_user_type_id', response.data.userTypeID);
        this.authService.isLoggedIn = true;
        const redirectUrl = '/pipes';
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/