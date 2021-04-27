import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  id?: Observable<number> = of(0);
  add?: Observable<boolean>;
  constructor() {
  }

  updateEmployeeId(id: number): void{
    this.id = of(id);
  }

  updateFormAction(add: boolean){
    this.add = of(add);
  }

  getFormAction(): Observable<boolean>{
    return this.add;
  }

  getEmployeeId(): Observable<number>{
    return this.id;
  }

}
