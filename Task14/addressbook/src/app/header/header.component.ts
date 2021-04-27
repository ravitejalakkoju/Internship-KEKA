import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  getAction(): boolean{
    let length  = window.location.hash.split('/').length;
    let action = (window.location.hash.split('/')[length-1] == 'add')
    return action;
  }
}
