import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data: any = {};

  constructor(private http: HttpClient,
    private movieService: MovieService){}

  getMovies() {   // restituisce l'elenco di film richiamando il metodo da MovieService
    this.movieService.getMovies().subscribe(movies => {console.log(movies);
    this.data = movies;})
  }

  ngOnInit() {
    this.getMovies();
  }

}