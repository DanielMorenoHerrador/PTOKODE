import { Injectable } from '@angular/core';
import { Movie } from '../modelos/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllMovie() {
    const path = 'https://api.themoviedb.org/3/movie/popular?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1';
    return this.http.get<Movie[]>(path);
  }
}
