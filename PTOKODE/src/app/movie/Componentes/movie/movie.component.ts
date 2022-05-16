import { Component, OnInit } from '@angular/core';
import { Movie } from '../../modelos/movie';
import { MovieModule } from '../../movie.module';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {

    this.apiservice.getAllMovie()
    .subscribe(resp => {
      console.log(MovieModule)
    });
  }

}
