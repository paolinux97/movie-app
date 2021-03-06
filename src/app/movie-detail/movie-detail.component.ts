import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title = 'Movie App';
  movie: any = {};

  constructor(private route: ActivatedRoute,
    private movieService: MovieService) {}
  
  getMovie(): void {      // restituisce i dettagli di un film specifico richiamando il metodo da MovieService
    const imdbID = this.route.snapshot.paramMap.get('imdbID');
    this.movieService.getMovie(imdbID)
    .subscribe((result: any) => {console.log(result);
      this.movie = result});
  }

  ngOnInit() {
    this.getMovie();
  }
  
}
