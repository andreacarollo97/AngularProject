import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, nome: 'Andrea', cognome: 'Carollo', email:'anca@gmail.com', password:'ac12345'},
      { id: 2, nome: 'Manuel', cognome: 'Tocchi', email:'mato@gmail.com',password:'dfhdfh3' },
      { id: 3, nome: 'Fabio', cognome: 'Hu', email:'fahu@gmail.com',password:'7fwe9f7' },
      { id: 4, nome: 'Lorenzo', cognome: 'Verdi', email:'love@gmail.com',password:'53t5f6f35' },
      { id: 5, nome: 'Alessia', cognome: 'Blu', email:'albl@gmail.com',password:'d4353d4d5' },
      { id: 6, nome: 'Giada', cognome: 'Mosca', email:'gimo@gmail.com',password:'b77644x42' },
      { id: 7, nome: 'Anna', cognome: 'Cane', email:'anca@gmail.com',password:'as09dqwg982' },
      { id: 8, nome: 'Mirko', cognome: 'Petrulli', email:'mp3@gmail.com',password:'adf8yw0e' },
      { id: 9, nome: 'Stefano', cognome: 'Di Maio', email:'stm@gmail.com',password:'f986f69d8' },
      { id: 10, nome: 'Giulio', cognome: 'Patti', email:'giup@gmail.com',password:'4se972a' },
      { id: 11, nome: 'Davide', cognome: 'Rossi', email:'drossi@gmail.com',password:'23534fc' },
      { id: 12, nome: 'Mattia', cognome: 'Cucuzza', email:'macu@gmail.com',password:'a434c5344' }
  ];
    const auto = [
      { id: 1, marca: 'Fiat', modello: 'Panda', targa: 'ME123AF'},
      { id: 2, marca: 'Fiat', modello: 'Multipla', targa: 'PA946TU'},
      { id: 3, marca: 'Nissan', modello: 'Juke', targa: 'GE159YH'},
      { id: 4, marca: 'Ferrari', modello: 'Enzo', targa: 'RO783WE'},
      { id: 5, marca: 'Ford', modello: 'Fiesta', targa: 'MI466NM'},
      { id: 6, marca: 'Dacia', modello: 'Duster', targa: 'MI786SR'},
      { id: 7, marca: 'Seat', modello: 'Ibiza', targa: 'ME456PT'}
    ];
    const prenotazione = [
      { id: 1, dataInizio: '2022-04-13', dataFine: '2022-04-19', stato : 0, auto_id : 2, user_id : 4},
      { id: 2, dataInizio: '2022-05-20', dataFine: '2022-05-30', stato : 0, auto_id : 4, user_id : 1},
      { id: 3, dataInizio: '2022-03-08', dataFine: '2022-03-10', stato : 0, auto_id : 3, user_id : 7},
      { id: 4, dataInizio: '2022-04-25', dataFine: '2022-06-02', stato : 0, auto_id : 6, user_id : 3},
    ];
    return {users,auto,prenotazione};

  }
  getUserByEmail(email : string) {

}

}
