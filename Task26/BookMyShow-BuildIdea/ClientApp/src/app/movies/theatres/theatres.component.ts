import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.sass']
})
export class TheatresComponent implements OnInit {

  dates: string[];
  selectedDate: string = null;
  currentDate: Date = new Date();
  
  initializeDates(){
    this.selectedDate = formatDate(this.currentDate, 'yyyy-MM-dd', 'en');
    for (let index = 1; index <= 14; index++) {
      let date = new Date();
      this.dates.push(formatDate(date.setDate(date.getUTCDate()+index), 'yyyy-MM-dd', 'en')); 
      console.log(this.currentDate);
    }
  }

  selectDate(e: { value: string; }){
    this.selectedDate = e.value;
  }

  constructor() { 
    this.dates = []
    this.initializeDates();
  }

  ngOnInit(): void {
  }

}
