import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {ParcoAuto} from "../../model/parcoAuto";
import {Auto} from "../../model/auto";


@Injectable({
  providedIn: 'root'
})
export class ParcoAutoService {

  constructor(
    private http: HttpClient
  ) { }

  url : string = 'http://localhost:8080/api/parcoAuto';

  elencoParchiAuto(): Observable<ParcoAuto[]> {
    return this.http.get<ParcoAuto[]>(this.url+'/elenco/');
  }

  elencoAutoLibere(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.url+'/elencoAutoLibere');
  }

  elencoAutoParco(id : number): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.url+'/listaAutoParco/'+id);
  }


  salvaParcoAuto(parcoAuto : ParcoAuto) : Observable<ParcoAuto>{
    return this.http.post<ParcoAuto>(this.url+'/salva',parcoAuto)
  }

  getParcoAuto(id : number) : Observable<ParcoAuto> {
    return this.http.get<ParcoAuto>(this.url+'/detail/'+id);
  }


  editParcoAuto(parcoAuto : ParcoAuto) : Observable<ParcoAuto> {
    return this.http.put<ParcoAuto>(this.url+'/edit/'+parcoAuto.id,parcoAuto);
  }

  eliminaParcoAuto(id : number): Observable<any> {
    return this.http.delete<any>(this.url+'/elimina/'+id);
  }

  associaAuto(idAuto : number, idParcoAuto : number): Observable<any> {
    return this.http.post<any>(this.url+'/associate',{idParcoAuto : idParcoAuto, idAuto : idAuto});
  }






}

