import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getMovies() {
    this.movieService.getMovies().subscribe(movies => {console.log(movies);
    this.data = movies;})
  }

  

  ngOnInit() {
    this.getMovies();
  }

}