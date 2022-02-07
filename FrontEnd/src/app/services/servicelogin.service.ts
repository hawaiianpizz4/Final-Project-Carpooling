import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ServiceloginService {

  private URL = 'http://localhost:4000/api/logins2'

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: { email: string; password: string;  tipo:string}) {
    return this.http.post<any>(this.URL + '/signup2',user)
  }
  signIn(user: { email: string; password: string; }) {
    return this.http.post<any>(this.URL + '/signin2',user)
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }
}


