import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../../model/user";




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

  /** GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }




  /** GET user by id */
  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
  }


  /** POST: add a new hero to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  }



  /** DELETE: delete the hero from the server */
  deleteUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions);
  }

  /** PUT: update the hero on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.userUrl, user, this.httpOptions);
  }
}
