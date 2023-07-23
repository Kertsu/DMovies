import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieAPIService } from './services/movie-api.service';
import { BannerComponent } from './components/banner/banner.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    BannerComponent,
    MovieDetailsComponent,
    TrendingMoviesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MovieAPIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
