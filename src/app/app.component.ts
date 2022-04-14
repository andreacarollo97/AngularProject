import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from "./config/table/MyTableConfig";
import {configUser} from "./config/page/configUser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularProject';
  userTableConfig = configUser;
  config !: MyTableConfig;



  ngOnInit(): void {
  }

}
