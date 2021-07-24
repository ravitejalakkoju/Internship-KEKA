import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { BookingComponent } from './booking/booking.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent, pathMatch: 'full'},
  { path: ':id/details', component: MovieDetailsComponent},
  { path: ':id/booking', component: BookingComponent},
  { path: ':id/booking/:bookingId', component: BookingConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MoviesRoutingModule { }
