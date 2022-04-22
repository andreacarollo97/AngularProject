import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {Router} from "@angular/router";
import {AuthappService} from "../services/login/authapp.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public BasicAuth: AuthappService) {
  }

  ngOnInit(): void {
  }




}
