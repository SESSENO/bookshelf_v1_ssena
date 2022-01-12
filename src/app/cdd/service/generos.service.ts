import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Generos } from '../modelos/generos';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {


  // endPoint
  private urlApi = '../../assets/generos.json';
  constructor(private clienteDados: HttpClient) { }

  listagemGeneros() {
    return this.clienteDados.get<Generos[]>(this.urlApi)
  }
}
