import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DadosclienteService} from '../../dashservice.service'

declare const $: any; 
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  form: FormGroup;
  submitted = false;

  


  constructor(
    private fb: FormBuilder,
    private service: DadosclienteService

  ) { }

  ngOnInit() {


    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      idade: [null ,[Validators.required, Validators.minLength(1), Validators.maxLength(3)]]
    });
  

   this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  hasError(field: string) {
    return this.form.get(field).errors;
  }


  onSubmit() {
    this.submitted = true;
    console.log("formulario");
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.service.TotalDecada(this.form.value).subscribe(
        success => {
          console.log("ok")
          console.log("suceso")
          //his.modal.showAlertSuccess(msgSuccess);
        },
        error => console.log("Nok")
      );
    }
      let msgSuccess = 'Curso criado com sucesso!';
      let msgError = 'Erro ao criar curso, tente novamente!';
/*
      this.service.listaPorNome(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess(msgSuccess);
        },
        error => this.modal.showAlertDanger(msgError)
      );
    }*/
    }
  }


