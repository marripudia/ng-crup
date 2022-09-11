import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private dataService: DataService) { }



  ngOnInit(): void {
    this.dataService.data.subscribe( x => {
      console.log('data in service component', x);
    })
  }

}
