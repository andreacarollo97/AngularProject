import {Component, Input, OnInit} from '@angular/core';
import {configButton} from "./config/button/configButton";
import {MyTableConfig} from "./config/table/MyTableConfig";
import {configUserTable} from "./config/table/configTable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularProject';
  buttonTest = configButton;
  userTableConfig = configUserTable;
  arrayData !: Array<any>;
  config !: MyTableConfig;



  ngOnInit(): void {
    this.arrayData = [
      { nome: 'Andrea', cognome: 'Carollo', email:'ac@gmail.com' },
      { nome: 'Manuel', cognome: 'Tocchi', email:'mt@gmail.com' },
      { nome: 'Fabio', cognome: 'Hu', email:'fh@gmail.com' },
      { nome: 'Mattia', cognome: 'Cucuzza', email:'mc@gmail.com' },
    ];
  }

}
