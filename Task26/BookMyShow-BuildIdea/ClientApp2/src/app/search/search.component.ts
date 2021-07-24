import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  public status: boolean = true;

  @Output() statusChanged: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { 
  }

  ngOnInit(): void {
    this.statusChanged.emit(this.status);
  }

}
