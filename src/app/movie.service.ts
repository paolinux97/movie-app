import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'http://www.omdbapi.com/?apikey=4ee86d62&s=terminator'; // API Url per MoviesComponent
  private searchUrl = 'http://www.omdbapi.com/?apikey=4ee86d62&t='; // API Url per SearchMovieComponent
  private movieUrl = 'http://www.omdbapi.com/?apikey=4ee86d62&i=';  // API Url per DetailMovieComponent
  
  constructor(private http: HttpClient) { }

  getMovies (): Observable<any[]> {     // restituisce l'elenco di film prefissato, vedi 'moviesUrl'
    return this.http.get<any[]>(this.moviesUrl);
  }
  
  getMovie(imdbID: string): Observable<any> { //restituisce i dettagli di un film specifico concatenando 'movieUrl' con un parametro stringa corrispondente all'imdbID
    const url = `${this.movieUrl}${imdbID}`;
    return this.http.get<any>(url);
  }

  search(queryString: string) {     // cerca titolo di un film concatenando 'searchUrl' con un parametro in ingresso che corrisponda al titolo di un film presente nel database
    let url = this.searchUrl + queryString;
    return this.http.get(url);
  }

}