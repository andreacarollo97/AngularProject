import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersService} from "../users/users.service";
import {LogUser} from "../../model/logUser";
import {Token} from "../../model/token";

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  authURL = 'http://localhost:8080/api/auth/';

  constructor(private httpClient : HttpClient, private usersService : UsersService) {

  }


  public login(logUser : LogUser) : Observable<Token>{
    return this.httpClient.post<Token>(this.authURL + 'login',logUser)
  }




  loggedUser = () : string | null => (sessionStorage.getItem('email')) ? sessionStorage.getItem('email') : '';

  isLogged = () : boolean => !!(sessionStorage.getItem('AuthToken'));

  //clearUser = () : void => sessionStorage.removeItem(('email'));

  clearAll = () : void => sessionStorage.clear();
}
