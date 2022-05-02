import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {Auto} from "../../../model/auto";
import {AutosService} from "../../../services/auto/auto.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auto-detail',
  templateUrl: './auto-detail.component.html',
  styleUrls: ['./auto-detail.component.css']
})
export class AutoDetailComponent implements OnInit {

  auto !: Auto;
  form !: FormGroup;
  autoId !: number;

  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private service: AutosService,
    private location : Location,
    public fb: FormBuilder
  ) {
    this.form = fb.group({
      'marca': ['', Validators.required],
      'modello': ['', Validators.required],
      'targa': ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.activateRouter.params
      .subscribe(params => {
        let id: number = params['id'];
        if (id) {
          this.service.ottieniAuto(id)
            .subscribe(response => {
              this.auto = response ;
              this.autoId = Number(this.auto.id);
              delete this.auto.id;
              this.form.setValue(this.auto)
            });

        }
      })
  }


  onSubmit(){
    this.auto = this.form.value;
    if(!this.autoId){
      this.salvaAuto();
    }
    else{
      if (this.auto) {
        this.auto.id = this.autoId;
        this.editAuto()
      }
    }
  }

  salvaAuto() {
    this.service.salvaAuto(this.auto)
      .subscribe(response => this.router.navigate(['auto']))
  }

  editAuto() {
    this.service.editAuto(this.auto)
      .subscribe(response => this.router.navigate(['auto']))
  }


  goBack(): void {
    this.location.back();
  }



}












