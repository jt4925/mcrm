import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public page: any;

  constructor() { }

  public toggle() {
    return this.sideNavToggleSubject.next(null);
  }

  public setPage(page:any){
    this.page = page;
  }

  public getPage(){
    return this.page;
  }
}
