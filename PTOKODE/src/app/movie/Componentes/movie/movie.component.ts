import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
  }

}
