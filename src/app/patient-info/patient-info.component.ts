import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  dataFromParentCmponent: any ;
  @Input() studentArray: any;

  constructor() { }

  ngOnInit(): void {
    this.dataFromParentCmponent = this.studentArray;
    console.log('dataFrom parent ', this.dataFromParentCmponent);
  }

}
