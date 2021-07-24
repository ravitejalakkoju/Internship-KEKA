import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SecondNavMenuComponent } from './second-nav-menu/second-nav-menu.component';
import { LocationPickerComponent } from './nav-menu/location-picker/location-picker.component';
import { SearchComponent } from './search/search.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SecondNavMenuComponent,
    LocationPickerComponent,
    SearchComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
