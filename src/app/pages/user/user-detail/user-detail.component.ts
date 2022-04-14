import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/users/users.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user !: User;
  users : User[] = [];




  constructor(
    private route: ActivatedRoute,
    private service: UsersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }


  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getUser(Number(id))
        .subscribe(user => this.user = user);
    }
    else {
      this.user = {id : undefined, nome : '', cognome : '', email : '', password : ''}
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.user) {
      this.service.updateUser(this.user)
        .subscribe(() => this.goBack());
    }
  }

  add(): void {
      this.service.addUser(this.user)
        .subscribe(user => {
          this.users.push(user);
        });
      this.goBack()
    }
}
