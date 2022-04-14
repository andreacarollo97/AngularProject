import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Auto} from "../../model/auto";


@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private autoUrl = 'api/auto';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.autoUrl);
  }

  getAuto(id: number): Observable<Auto> {
    const url = `${this.autoUrl}/${id}`;
    return this.http.get<Auto>(url);
  }

  addAuto(auto: Auto): Observable<Auto> {
    return this.http.post<Auto>(this.autoUrl, auto, this.httpOptions);
  }

  deleteAuto(id: number): Observable<Auto> {
    const url = `${this.autoUrl}/${id}`;
    return this.http.delete<Auto>(url, this.httpOptions);
  }

  updateAuto(auto: Auto): Observable<any> {
    return this.http.put(this.autoUrl, auto, this.httpOptions);
  }
}
