import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {

  dataFromParentCmponent: any ;
  @Input() studentArray: any;
  @Output() sendDataToParent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.dataFromParentCmponent = this.studentArray;
    console.log('dataFrom parent ', this.dataFromParentCmponent);
  }

  onClickMe(event: any) {
    this.studentArray.push(      {
      name: 'Prameela',
      marks: '60',
      subject: 'angular'
    });
    this.sendDataToParent.emit(this.studentArray);
    console.log('clicked ', this.studentArray);

  }

}
