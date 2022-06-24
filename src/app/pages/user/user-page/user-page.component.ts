import { Component, OnInit } from '@angular/core';
import { User } from "../../../model/user";
import { configUser } from "../../../config/page/configUser";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../../../services/users/users.service";
import {AuthappService} from "../../../services/login/authapp.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users : User[] = [];
  usersTable = configUser;



  constructor(
    private authService : AuthappService,
    private service: UsersService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  btnClicked($event: any) {
    switch ($event.action) {
      case 'add':
        this.router.navigate(['add'], {relativeTo: this.route}).then(r => ['']) ;
        break;
      case 'edit':
        this.router.navigate(['detail/' + $event.item.id], {relativeTo: this.route}).then(r => ['']);
        break;
      case 'delete':
        this.eliminaUser($event.item.id);
        break;
    }
  }

  eliminaUser(id : number) {
    this.service.eliminaUser(id)
      .subscribe(response => {
        this.users = this.users.filter(user => user.id != id)
      })
  }

  getUsers(): void {
    if(this.authService.isLogged() && sessionStorage.getItem('AuthRole') === 'ROLE_ADMIN'){
        this.service.getUsersWhenAdmin('ROLE_SUPER')
          .subscribe(users => this.users = users);
    }
      else {
        this.service.getUsers()
          .subscribe(users =>  this.users = users);
      }
  }







}
