import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { BookingComponent } from './booking/booking.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { MoviesComponent } from './movies.component';


@NgModule({
  declarations: [
    MoviesComponent,
    BookingComponent,
    MovieDetailsComponent,
    BookingConfirmationComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  exports: [
    MoviesComponent
  ]
})
export class MoviesModule { }
