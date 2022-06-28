import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../../services/users/users.service";
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthappService} from "../../../services/login/authapp.service";



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user !: any;
  form !: FormGroup;
  userId !: number;



  constructor(
    public authService : AuthappService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private service: UsersService,
    private location : Location,
    public fb: FormBuilder
  )
  {
    this.form = fb.group({
      'nome': ['', Validators.required],
      'cognome': ['', Validators.required],
      'email': ['', Validators.email],
      'password': ['', Validators.minLength(6)],
      'ruolo': ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.activateRouter.params
      .subscribe(params => {
        this.userId = params['id'];
        if (this.userId) {
          this.service.ottieniUser(this.userId)
            .subscribe(response => {
              this.user = {
                nome : response.nome,
                cognome : response.cognome,
                password : '',
                email : response.email,
                ruolo : response.ruolo
              };
              console.log(response);
              this.form.setValue(this.user)
            });

        }
        else {
          this.user = {
            id : undefined,
            cognome : '',
            email : '',
            password : '',
            ruolo : ''
          }
        }
      })
  }



  onSubmit(){
      this.salvaUser();
  }

  salvaUser() {
    let request = this.form.value;
    request.id = this.userId;
    this.service.salvaUser(request)
      .subscribe(response => this.router.navigate(['user']))
  }


  goBack(): void {
    this.location.back();
  }

}
