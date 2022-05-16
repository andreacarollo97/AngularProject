import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const ID_KEY = 'AuthId';
const ROLE_KEY = 'AuthRole';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(token : string) : void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken = () : string  => {
     let authHeader !: string;
     let token = sessionStorage.getItem(TOKEN_KEY);

     if (token != null) {
       authHeader = 'Bearer' + token;
     }
     return authHeader;
  }


  public setRuolo(ruolo : string) : void {
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY,ruolo);
  }


  public getRuolo = () : string  => {
    let ruolo !: string;
    let role = sessionStorage.getItem(ROLE_KEY);

    if (role != null) {
      ruolo = role;
    }
    return ruolo;
  }

  public setID(id : number) : void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY,String(id));
  }


  public getId = () : number  => {
    let ident !: string;
    let id = sessionStorage.getItem(ID_KEY);

    if (id != null) {
      ident = id;
    }
    return Number(ident);
  }


}
