import { Injectable } from '@angular/core';
import { IUser } from "src/app/products/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string): boolean {  
    if (email == "admin" && password == "admin") {  
      localStorage.setItem('currentUser', "loggedin");  
      return true;  
    }
    return false;
  }  
  logout() {  
    localStorage.removeItem('currentUser');  
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  }

}
