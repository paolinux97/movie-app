import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'http://www.omdbapi.com/?apikey=4ee86d62&s='; // API Url per MovieComponent
  private movieUrl = 'http://www.omdbapi.com/?apikey=4ee86d62&i=';  // API Url per DetailMovieComponent
  
  constructor(private http: HttpClient) {}
  
  getMovies(Title: string): Observable<any> {     // cerca titolo/i film concatenando 'searchUrl' con un parametro in ingresso che corrisponde al titolo di un film presente nel database
    const _moviesUrl = `${this.moviesUrl}${Title}`;
    return this.http.get<any>(_moviesUrl);
  }

  getMovie(imdbID: string): Observable<any> { // restituisce i dettagli di un film specifico concatenando 'movieUrl' con un parametro stringa corrispondente all'imdbID
    const _movieUrl = `${this.movieUrl}${imdbID}`;
    return this.http.get<any>(_movieUrl);
  }

}