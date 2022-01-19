import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Generos } from '../modelos/generos';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {


  // endPoint
  private urlApi = '../../assets/generos.json';
  constructor(private clienteDados: HttpClient) { }

  listagemGeneros() {
    return this.clienteDados.get<Generos[]>(this.urlApi)
    .pipe(
      delay(500),
      first(),
      tap(apiGeneros => console.log(apiGeneros))
    )
  }
}
