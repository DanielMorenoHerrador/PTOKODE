import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './Componentes/movie/movie.component';



@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MovieComponent
  ]
})
export class MovieModule { }
