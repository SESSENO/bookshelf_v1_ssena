import { GenerosService } from './../service/generos.service';
import { Component, OnInit } from '@angular/core';
import { Generos } from '../modelos/generos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
  livroGeneros: Observable <Generos[]>;
  visaoColunas = ['_idGenero', 'nomeGenero', 'decimalGenero'];

  // constructor(private generosService: GenerosService) { qdo utiliza private a propriedade generosService é indicada como não utilizada.
  constructor(generosService: GenerosService) {
    this.livroGeneros = generosService.listagemGeneros();
  }

  ngOnInit(): void {}
}
