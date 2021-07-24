import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  isExpanded: boolean = false;
  isLogged: boolean = false;

  selectedCity: string = "Select City"; 
  locationPicker: boolean = false;

  options: boolean = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  
  toggleLocationPicker(){
    this.locationPicker = !this.locationPicker;
  }

  toggleOptions(){
    this.options = !this.options;
  }

  selectCity(value: string){
    this.selectedCity = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
