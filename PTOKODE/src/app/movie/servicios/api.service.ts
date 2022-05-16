import { Injectable } from '@angular/core';
import { Movie } from '../modelos/movie';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private movie: Movie = { poster_path: "", overview: "", id: "", url: "", title: ""};
  private TMDBUrl = "https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1"; // URL to web api

  constructor(private http: HttpClient) { }

  public getMovie(): Observable<Movie> {
    return this.http.get<Movie>(this.TMDBUrl)
  }
}
