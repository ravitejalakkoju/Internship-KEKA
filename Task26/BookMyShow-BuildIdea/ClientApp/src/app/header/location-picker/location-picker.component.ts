import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.sass']
})
export class LocationPickerComponent implements OnInit {

  @Input() cityName: string;

  @Output() toggleLocationPicker: EventEmitter<any> = new EventEmitter();
  @Output() citySelector: EventEmitter<any> = new EventEmitter();
  
  selectedCity: string = null
  viewCities: boolean = false 

  toggleViewCities(){
    this.viewCities = !this.viewCities
  }

  isSelected(value: string){
    this.selectedCity = value
    this.citySelector.emit(this.selectedCity)
  }

  isChecked(value: string){
    if(this.selectedCity == value) return true;
    else return false;
  }
  constructor() { }

  ngOnInit(): void {
    this.selectedCity = this.cityName
  }

}
