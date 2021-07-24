import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { TheatresComponent } from './theatres/theatres.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    SeatSelectionComponent,
    TheatresComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  exports:[
    MoviesComponent
  ]
})

export class MoviesModule { }
