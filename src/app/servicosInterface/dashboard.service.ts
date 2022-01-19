import { Dashboard } from './../modelosinterface/dashboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

 // End Point
 private readonly uriApi = '../../assets/dashboard.json';
 constructor(private cardsDashboard : HttpClient) { }


 // first - pega o primeiro resultado
 // tap trata os dados do observer para o formado Dashboard.
 listagemMenu() {
  return this.cardsDashboard.get<Dashboard[]>(this.uriApi)
  .pipe(
    first(),
    tap(apiDashboard => console.log(apiDashboard))
  )


}

}
