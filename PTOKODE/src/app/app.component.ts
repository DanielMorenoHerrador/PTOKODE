import { Component } from '@angular/core';
import { ApiService } from './movie/servicios/api.service';
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
    .subscribe(Movies => {
      console.log(Movies);
    })
    
  }
}
