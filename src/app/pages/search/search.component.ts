import { Component } from '@angular/core';
import { MovieAPIService } from 'src/app/services/movie-api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery!: string;
  movies!: any[];
  constructor(private movieApiService: MovieAPIService) {}

  onSearch() {
    if (this.searchQuery) {
      this.movieApiService.movieApiData(this.searchQuery).subscribe(
        (response: any) => {
          this.movies = response.results.map((movie: any) => {
            const releaseDate = new Date(movie.release_date);
            const year = releaseDate.getFullYear();
            return { ...movie, release_year: year };
          });
        },
        (error: any) => {
          console.error('An error occurred:', error);
        }
      );
    } else {
      this.movies = [];
    }
  }
}
