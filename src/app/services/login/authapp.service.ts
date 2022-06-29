import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {UsersService} from "../users/users.service";
import {LogUser} from "../../model/logUser";
import {Token} from "../../model/token";

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  authURL = 'http://localhost:8080/api/auth/';

  subject = new Subject<string | undefined | null >()

  constructor(private httpClient : HttpClient, private usersService : UsersService) {

  }


  public login(logUser : LogUser) : Observable<Token>{
    return this.httpClient.post<Token>(this.authURL + 'login',logUser)
  }

  public logOut() : void {
    this.clearAll();
    this.subject.next(this.loggedUser());
  }

  loggedUser = () : string | null => (sessionStorage.getItem('AuthToken')) ? sessionStorage.getItem('AuthToken') : '';

  isLogged = () : boolean => !!(sessionStorage.getItem('AuthToken'));

  isSuper = () : boolean => (sessionStorage.getItem('AuthRole') === 'ROLE_SUPER');

  isAdmin = () : boolean => (sessionStorage.getItem('AuthRole') === 'ROLE_ADMIN');

  isUser = () : boolean => (sessionStorage.getItem('AuthRole') === 'ROLE_USER');

  clearAll = () : void => sessionStorage.clear();
}
