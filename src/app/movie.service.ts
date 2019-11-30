import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Attribute } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'http://www.omdbapi.com/?apikey=4ee86d62&s=terminator';
  private movieUrl = 'http://www.omdbapi.com/?apikey=4ee86d62&i=';
  

  constructor(private http: HttpClient) { }

 

  getMovies (): Observable<any[]> {
    return this.http.get<any[]>(this.moviesUrl);
  }
  
  getMovie(imdbID: string): any {
    const url = `${this.movieUrl}${imdbID}`;
    return this.http.get<any>(url);
  }

  
}