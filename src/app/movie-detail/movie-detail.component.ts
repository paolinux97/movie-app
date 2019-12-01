import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  data: any = {};

  constructor(private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService) {}
  
  getMovie(): void {      // restituisce i dettagli di un film specifico richiamando il metodo da MovieService
    const imdbID = this.route.snapshot.paramMap.get('imdbID');
    this.movieService.getMovie(imdbID)
      .subscribe(movie => {console.log(movie); this.data = movie});
  }

  ngOnInit() {
    this.getMovie();
  }
  
}
