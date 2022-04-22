import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from "./config/table/MyTableConfig";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularProject';
  config !: MyTableConfig;

  ngOnInit(): void {
  }



}
