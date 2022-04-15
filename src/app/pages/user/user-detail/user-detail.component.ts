import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {ActivatedRoute} from "@angular/router";
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
    private route: ActivatedRoute,
    private service: UsersService,
    private location: Location,
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
    this.getUser();
  }


  getUser(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.userId) {
      this.service.getUser(Number(this.userId))
        .subscribe(user => {
          this.user = user;
          console.log(this.user);
          this.form.setValue({
            nome: this.user.nome,
            cognome: this.user.cognome,
            email: this.user.email,
            password : this.user.password
          });
        });

    }
    else {
      this.user = {id : undefined, nome : '', cognome : '', email : '', password : ''}
    }
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(){
    this.user = this.form.value;
    if(!this.userId){
      this.service.addUser(this.user)
        .subscribe(user => {
          this.users.push(user);
          this.goBack()
        });
    }
    else{
      console.log(this.user)
      if (this.user) {
        this.user.id = this.userId;
        console.log(this.user)
        this.service.updateUser(this.user)
          .subscribe(() => this.goBack());
      }
    }

  }


}
