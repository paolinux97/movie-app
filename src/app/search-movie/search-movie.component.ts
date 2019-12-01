import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  title = 'Movie App';
  data: any[] = [];
  queryField: FormControl = new FormControl();

  constructor(private movieService: MovieService) {}
  
  searchByTitle() {     // cerca per titolo richimando il metodo da MovieService
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