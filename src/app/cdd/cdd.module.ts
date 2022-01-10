import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { CddRoutingModule } from './cdd-routing.module';
import { ClassesComponent } from './classes/classes.component';



@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    CddRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]
})
export class CddModule { }
