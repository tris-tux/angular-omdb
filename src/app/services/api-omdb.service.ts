import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiOmdbService {

  url = "http://omdbapi.com/?apikey=2a79bff5&s=Batman&page=1"

  constructor(
    private http:HttpClient
  ) { }

  getMovies() {
    return this.http.get(this.url)
  }
}
