import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataCommunication: BehaviorSubject<any> = new BehaviorSubject('inital data');
  data: Observable<any> = this.dataCommunication.asObservable();

  constructor() { }

  sendData(data: any) {
    const totalNumber = this.caluclateTwoNunber(3,4);
    this.dataCommunication.next(data);
  }

  caluclateTwoNunber(a: any, b: any) {
    return a+b;
  }
}
