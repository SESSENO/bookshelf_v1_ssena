import { DashboardService } from './../servicosInterface/dashboard.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, catchError, of } from 'rxjs';
import { Dashboard } from '../modelosinterface/dashboard';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  usuario={userName: 'Sérgio Sena', icone: 'remember_me'};
  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'O melhor Livro de janeiro', img:'../../assets/imagens/1.png', cols: 1, rows: 1 },
  //         { title: 'Dica dos Leitores', cols: 1, img:'../../assets/imagens/2.png', rows: 1 },
  //         { title: 'O mais comentado da semana', img:'../../assets/imagens/3.png', cols: 1, rows: 1 },
  //         { title: 'Indicação do time BookShelf', img:'../../assets/imagens/4.png', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'O melhor Livro de janeiro', img:'../../assets/imagens/1.png', cols: 2, rows: 1 },
  //         { title: 'Dica dos leitores', cols: 1, img:'../../assets/imagens/2.png', rows: 1 },
  //         { title: 'O mais comentado da semana', img:'../../assets/imagens/3.png', cols: 1, rows: 2 },
  //         { title: 'Indicação do time BookShelf', img:'../../assets/imagens/4.png', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  cards$: Observable<Dashboard[]>;

  constructor(private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService)
    {
      this.cards$=dashboardService.listagemMenu()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }
}
