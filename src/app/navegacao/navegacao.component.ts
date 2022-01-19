import { MenuNavegador } from './../modelosinterface/menu-navegador';
import { NavegacaoService } from './../servicosInterface/navegacao.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, catchError, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {


  //Itens do Menu Principal
  tituloNav='BookShelv v1';
  usuario={userName: 'Sérgio Sena', icone: 'remember_me'};
  //Itens da Barra Superior
  tituloBarra='[Sua estante Virtual]';
  //Itens de ícones e imagens de navegação
  iconeGeral='../../assets/imagens/ShelfBook.png';
  lIcone=80;
  aIcone=80;
  //Controle das rotas do menu
  itensMenu$ : Observable<MenuNavegador[]>;

  // [
  //   {linkMenu: '/cdd', labelMenu:'Classes Dewey', hab: true},
  //   {linkMenu: '/feed', labelMenu:'Feed Notícias', hab: true},
  //   {linkMenu: '/clube', labelMenu:'Página Usuário', hab: false},
  //   {linkMenu: '/leitura', labelMenu:'Clubes de Leitura', hab: false},
  //   {linkMenu: '/estante', labelMenu:'Estante Particular', hab: false},

  // ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private navegadorService: NavegacaoService)
     {
      this.itensMenu$=navegadorService.listagemMenu()
      .pipe(
        catchError(error =>{
          return of([])
        })
      )
    }

}
