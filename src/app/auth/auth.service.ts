import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  constructor(private http: HttpClient){}

  login(): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post('http://ezyhostings-001-site1.dtempurl.com/api/User/authenticate/',
      JSON.stringify({username: 'deepusa1988@gmail.com', password: '123456'}),
      requestOptions
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/