import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Address Book';
  constructor(private location: Location){}
  ngOnInit(){
    window.addEventListener('keydown', e => {
      if(e.keyCode === 27) this.location.back();
    })
  }
}
