import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerAuthFormComponent } from './customer-auth-form/customer-auth-form.component';
import { CustomerBookingsComponent } from './customer-bookings/customer-bookings.component';
import { CustomerBookingDetailsComponent } from './customer-booking-details/customer-booking-details.component';


@NgModule({
  declarations: [
    CustomerProfileComponent,
    CustomerAuthFormComponent,
    CustomerBookingsComponent,
    CustomerBookingDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  exports: [
    CustomerProfileComponent
  ]
})
export class CustomerModule { }
