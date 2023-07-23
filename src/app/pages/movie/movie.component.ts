import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/services/movie-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  constructor(
    private movieAPIService: MovieAPIService,
    private activatedRoute: ActivatedRoute
  ) {}

  movie: any;
  movieVideo: any;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.getMovie(id);
    this.getVideo(id);
  }

  getMovie(id: any) {
    this.movieAPIService.movieDetails(id).subscribe((result) => {
      this.movie = result;
    });
  }

  getVideo(id: any) {
    this.movieAPIService.movieVideo(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if ((element.type = 'Trailer')) {
          this.movieVideo = element.key;
        }
      });
    });
  }
}
