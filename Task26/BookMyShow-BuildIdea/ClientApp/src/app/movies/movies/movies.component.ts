import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  
  selectedLocation: string;
  selectedLocationSubscription: any;

  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(private _locationService: LocationService) { 
    this.selectedLocation = this.capitalizeFirstLetter(this._locationService.currentLocation);
    this.selectedLocationSubscription = _locationService.currentLocationChange.subscribe(value => {
      this.selectedLocation = this.capitalizeFirstLetter(value);
    })
  }
  
  ngOnInit(): void {
  }

}
