import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  
  constructor(
    private http: HttpClient
  ) { }
    
  register(user:any) {
    console.log({
      user,
      from: "authService-Register"
    });
    return this.http.post("http://localhost:3000/register", user);
  }
}
