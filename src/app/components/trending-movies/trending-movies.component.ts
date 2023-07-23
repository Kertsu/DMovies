import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css'],
})
export class TrendingMoviesComponent {
  @Input() trendingMoviesResult: any = [];
}
