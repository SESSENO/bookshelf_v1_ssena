import { MenuNavegador } from './../modelosinterface/menu-navegador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {

 // End Point
 private readonly uriApi = '../../assets/menuNavegador.json';
 constructor(private menuDados: HttpClient) { }

 // MenuNavegador[] - interface do formato que deseja receber
 // tap transforma o observer get para o formato do
 listagemMenu() {
  return this.menuDados.get<MenuNavegador[]>(this.uriApi)
  .pipe(
    first(),
    tap(apiMenu => console.log(apiMenu))
  )

}

}
