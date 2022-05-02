import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Prenotazione} from "../../model/prenotazione";
import {Auto} from "../../model/auto";

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {

  private prenotazioneUrl = 'api/prenotazione';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /*
  getPrenotazioni(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.prenotazioneUrl);
  }

  getPrenotazione(id: number): Observable<Prenotazione> {
    const url = `${this.prenotazioneUrl}/${id}`;
    return this.http.get<Prenotazione>(url);
  }

  addPrenotazione(prenotazione: Prenotazione): Observable<Prenotazione> {
    return this.http.post<Prenotazione>(this.prenotazioneUrl, prenotazione, this.httpOptions);
  }

  deletePrenotazione(id: number): Observable<Prenotazione> {
    const url = `${this.prenotazioneUrl}/${id}`;
    return this.http.delete<Prenotazione>(url, this.httpOptions);
  }

  updatePrenotazione(prenotazione: Prenotazione): Observable<any> {
    return this.http.put(this.prenotazioneUrl, prenotazione, this.httpOptions);
  }

   */
  url : string = 'http://localhost:8080/api/prenotazione';



  getPrenotazioni(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.url+'/elenco');
  }

  salvaPrenotazione(prenotazione : Prenotazione) : Observable<Prenotazione>{
    return this.http.post<Prenotazione>(this.url+'/salva',prenotazione)
  }

  ottieniPrenotazione(id : number) : Observable<Prenotazione> {
    return this.http.get<Prenotazione>(this.url+'/'+id);
  }

  editPrenotazione(prenotazione : Prenotazione) : Observable<Prenotazione> {
    return this.http.put<Prenotazione>(this.url+'/edit/'+prenotazione.id,prenotazione);
  }

  eliminaPrenotazione(id : number): Observable<any> {
    return this.http.delete<any>(this.url+'/elimina/'+id);
  }
}
