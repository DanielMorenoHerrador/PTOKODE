import { Component } from '@angular/core';
import { MovieComponent } from './movie/Componentes/movie/movie.component';
import { ApiService } from './movie/servicios/api.service';
import { Movie } from './movie/modelos/movie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PTOKODE';

  constructor(
    private apiservice: ApiService
  ) { }

  getAllMovie() {
    this.apiservice.getAllMovie()
    .subscribe(Movie => {
      console.log(Movie);
    })
    
  }
  mostrarPeliculas() {
    console.log()
    }
    
  }


