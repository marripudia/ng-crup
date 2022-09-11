import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Learn angular - Anusha Marripudi';
  studentArray: any[] = [];

  constructor() {
    console.log('call me constructor');

  }

  onDataFromChild(event: any) {
    console.log('from child', event);
  }

  ngOnInit(): void {
    console.log('call me on init');
    this.studentArray = [
      {
        name: 'Anusha',
        marks: '90',
        subject: 'database'
      },
      {
        name: 'Srinu',
        marks: '80',
        subject: 'database'
      },
      {
        name: 'Venu',
        marks: '70',
        subject: 'database'
      },
      {
        name: 'Charvi',
        marks: '90',
        subject: 'database'
      }
    ]
  }
}
