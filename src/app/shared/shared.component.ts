import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.data.subscribe( x => {
      console.log('sgared conpo', x);
    })
  }

}
