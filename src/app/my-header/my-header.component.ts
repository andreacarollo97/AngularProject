import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyTableConfig} from "../config/table/MyTableConfig";
import {MyHeaderConfig} from "../config/header/MyHeaderConfig";
import {Router} from "@angular/router";
import {AuthappService} from "../services/login/authapp.service";

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  @Input() headerConfig!: MyHeaderConfig;



  constructor(
    private route : Router,
    private service : AuthappService
  ) { }

  ngOnInit(): void {
  }

  onClick(route : string): void {
    if (route === "/logout"){
      this.service.logOut()
    }
    this.route.navigate([route]);
  }
}
