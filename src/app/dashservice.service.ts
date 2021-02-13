import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take, catchError } from 'rxjs/operators';
import {NomesApi}  from './models/nomes-api';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DadosclienteService {


  private readonly API = `api/v2/censos/nomes/`;

  private dashdatas = new Subject<NomesApi>();

    // Observable string streams
  dashdatasob$ = this.dashdatas.asObservable();

  constructor(private http: HttpClient) { }

  TotalDecada(cliente) : Observable<NomesApi> {
    console.log(this.API+cliente.nome);
    console.log("this.API+cliente.nome");
    return this.http.get<NomesApi>(this.API+cliente.nome).pipe(
      tap(
        dadosclientes => this.dashdatas.next(dadosclientes)
        )
    );
  }
}