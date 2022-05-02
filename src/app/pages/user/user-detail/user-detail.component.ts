import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../../services/users/users.service";
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user !: User;
  users : User[] = [];

  form !: FormGroup;
  userId !: number;

  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private service: UsersService,
    private location : Location,
    public fb: FormBuilder
  ) {
    this.form = fb.group({
      'nome': ['', Validators.required],
      'cognome': ['', Validators.required],
      'email': ['', Validators.email],
      'password': ['', Validators.minLength(6)],
    })
  }

  ngOnInit(): void {
    this.activateRouter.params
      .subscribe(params => {
        let id: number = params['id'];
        if (id) {
          this.service.ottieniUser(id)
            .subscribe(response => {
              this.user = response ;
              this.userId = Number(this.user.id);
              delete this.user.id;
              this.form.setValue(this.user)
            });

        }
      })
  }

  onSubmit(){
    this.user = this.form.value;
    if(!this.userId){
      this.salvaUser();
    }
    else{
      if (this.user) {
        this.user.id = this.userId;
        this.editUser();
      }
    }
  }

  salvaUser() {
    this.service.salvaUser(this.user)
      .subscribe(response => this.router.navigate(['user']))
  }

  editUser() {
    this.service.editUser(this.user)
      .subscribe(response => this.router.navigate(['user']))
  }





  goBack(): void {
    this.location.back();
  }

}
