import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bannerResult: any = [];
  trendingMoviesResult: any = [];

  constructor(private movieAPIService: MovieAPIService) {}

  ngOnInit(): void {
    this.bannerData();
    this.trendingMoviesData();
  }

  bannerData() {
    return this.movieAPIService.bannerApiData().subscribe((data) => {
      this.bannerResult = data.results;
    });
  }

  trendingMoviesData() {
    return this.movieAPIService.trendingMovieApiData().subscribe((data) => {
      this.trendingMoviesResult = data.results;
    });
  }
}
