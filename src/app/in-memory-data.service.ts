import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, nome: 'Andrea', cognome: 'Carollo', email:'anca@gmail.com', password:'ac123'},
      { id: 2, nome: 'Manuel', cognome: 'Tocchi', email:'mato@gmail.com' },
      { id: 3, nome: 'Fabio', cognome: 'Hu', email:'fahu@gmail.com' },
      { id: 4, nome: 'Lorenzo', cognome: 'Verdi', email:'love@gmail.com' },
      { id: 5, nome: 'Alessia', cognome: 'Blu', email:'albl@gmail.com' },
      { id: 6, nome: 'Giada', cognome: 'Mosca', email:'gimo@gmail.com' },
      { id: 7, nome: 'Anna', cognome: 'Cane', email:'anca@gmail.com' },
      { id: 8, nome: 'Mirko', cognome: 'Petrulli', email:'mp3@gmail.com' },
      { id: 9, nome: 'Stefano', cognome: 'Di Maio', email:'stm@gmail.com' },
      { id: 10, nome: 'Giulio', cognome: 'Patti', email:'giup@gmail.com' },
      { id: 11, nome: 'Davide', cognome: 'Rossi', email:'drossi@gmail.com' },
      { id: 12, nome: 'Mattia', cognome: 'Cucuzza', email:'macu@gmail.com' }
  ];
    return {users};
  }


}
