import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';
import {Cliente}  from './models/cliente';

@Injectable({
  providedIn: 'root'
})
export class DadosclienteService {


  private readonly API = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/`;

  constructor(private http: HttpClient) { }

  TotalDecada(cliente) {
    console.log(this.API+cliente.nome);
    return this.http.get<Cliente[]>(this.API+cliente.nome)
      .pipe(
        tap(console.log)
      );
  }


}

