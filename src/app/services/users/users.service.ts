import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../../model/user";
import {environment} from "../../../environments/environment";
import {Auto} from "../../model/auto";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userUrl = 'api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /*
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUserByEmail(email: string): Observable<User> {
    const url = `${this.userUrl}/?email=${email}`;
    return this.http.get<User>(url);
  }


  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
  }
  //authorized by Fabio

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.userUrl, user, this.httpOptions);
  }

  getAll() {
    return this.http.get<User[]>('http://localhost:4200/user');
  }
   */

  url : string = 'http://localhost:8080/api/user';



  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url+'/elenco/');
  }

  salvaUser(user : User) : Observable<User>{
    return this.http.post<User>(this.url+'/salva',user)
  }

  ottieniUser(id : number) : Observable<User> {
    return this.http.get<User>(this.url+'/'+id);
  }

  editUser(user : User) : Observable<User> {
    return this.http.put<User>(this.url+'/edit/'+user.id,user);
  }

  eliminaUser(id : number): Observable<any> {
    return this.http.delete<any>(this.url+'/elimina/'+id);
  }
}
