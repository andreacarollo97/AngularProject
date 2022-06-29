import {Component, Input, OnInit} from '@angular/core';
import {MyHeaderConfig} from "./config/header/MyHeaderConfig";
import {configHeaderNoLogged} from "./config/header/configHeaderNoLogged";
import {configHeaderUser} from "./config/header/configHeaderUser";
import {configHeaderAdmin} from "./config/header/configHeaderAdmin";
import {configHeaderSuper} from "./config/header/configHeaderSuper";
import {AuthappService} from "./services/login/authapp.service";
import {Subject} from "rxjs";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  config !: MyHeaderConfig



  constructor(
    private authService : AuthappService
  ) {
  }

  ngOnInit(): void {
    this.getLogged(sessionStorage.getItem("AuthRole"));
    this.authService.subject.subscribe({
      next: (role) => { this.getLogged(role)
        console.log(role) }
    })

  }

  doNext() : string | null | undefined {
    console.log("ciao");
    return sessionStorage.getItem("AuthRole");
  }

  getLogged(role : string | undefined | null): void {
    if (role === 'ROLE_USER'){
      this.config = configHeaderUser
    }
    else if (role === 'ROLE_ADMIN'){
      this.config = configHeaderAdmin
    }
    else if (role === 'ROLE_SUPER'){
      this.config = configHeaderSuper
    }
    else {
      this.config = configHeaderNoLogged
    }

  }


}
