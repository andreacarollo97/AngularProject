import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ParcoAuto} from "../../../model/parcoAuto";
import {ParcoAutoService} from "../../../services/parcoAuto/parco-auto.service";

@Component({
  selector: 'app-parco-auto-detail',
  templateUrl: './parco-auto-detail.component.html',
  styleUrls: ['./parco-auto-detail.component.css']
})
export class ParcoAutoDetailComponent implements OnInit {

  parcoAuto !: ParcoAuto;
  form !: FormGroup;
  parcoAutoId !: number;

  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private service: ParcoAutoService,
    private location : Location,
    public fb: FormBuilder
  ) {
    this.form = fb.group({
      'nome': ['', Validators.required],
      'cittadina': ['', Validators.required],
      'indirizzo': ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.activateRouter.params
      .subscribe(params => {
        let id: number = params['id'];
        if (id) {
          this.service.getParcoAuto(id)
            .subscribe(response => {
              this.parcoAuto = response ;
              this.parcoAutoId = Number(this.parcoAuto.id);
              //delete this.parcoAuto.id;
              this.form.setValue(this.parcoAuto)
            });

        }
      })
  }




  onSubmit(){
    this.parcoAuto = this.form.value;
    if(!this.parcoAutoId){
      this.salvaAuto();
    }
    else{
      if (this.parcoAuto) {
        this.parcoAuto.id = this.parcoAutoId;
        this.editAuto()
      }
    }
  }

  salvaAuto() {
    this.service.salvaParcoAuto(this.parcoAuto)
      .subscribe(response => this.router.navigate(['parcoAuto']))
  }

  editAuto() {
    this.service.editParcoAuto(this.parcoAuto)
      .subscribe(response => this.router.navigate(['parcoAuto']))
  }


  goBack(): void {
    this.location.back();
  }
}
