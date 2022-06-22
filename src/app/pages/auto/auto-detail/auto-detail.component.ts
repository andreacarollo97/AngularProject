import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {AutosService} from "../../../services/auto/auto.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EditAuto} from "../../../model/editAuto";

@Component({
  selector: 'app-auto-detail',
  templateUrl: './auto-detail.component.html',
  styleUrls: ['./auto-detail.component.css']
})
export class AutoDetailComponent implements OnInit {

  auto !: any;
  form !: FormGroup;
  autoId ?: number;


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
        this.autoId  = params['id'];
        if (this.autoId) {
          this.service.ottieniAuto(this.autoId)
            .subscribe(response => {
              this.auto = {
                targa : response.targa,
                marca : response.marca,
                modello : response.modello
              };
              this.form.setValue(this.auto)
            });

        }
        else {
          this.auto = {
            id : undefined,
            targa : '',
            marca : '',
            modello : ''
          }
        }
      })
  }


  onSubmit(){
      this.salvaAuto();
  }

  salvaAuto() {
    let request = this.form.value;
    request.id = this.autoId;
    console.log(request);
    this.service.salvaAuto(request)
      .subscribe(response => this.router.navigate(['auto']))
  }



  goBack(): void {
    this.location.back();
  }



}












