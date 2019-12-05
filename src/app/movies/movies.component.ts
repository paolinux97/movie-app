import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = 'Movie App';
  data: any = {};
  queryField: FormControl = new FormControl();

  constructor(private movieService: MovieService){}

  searchByTitle() {     // restituisce elenco film i cui titoli corrispondono al parametro in ingresso del metodo "search()" di MovieService
    this.queryField.valueChanges.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    switchMap((query: any) =>  this.movieService.search(query)))
    .subscribe((result: any) => {this.data = result});
  }

  ngOnInit() {
    this.searchByTitle();
  }

}