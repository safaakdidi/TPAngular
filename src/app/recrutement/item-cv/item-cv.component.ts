import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../model/Person";

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCVComponent implements OnInit {
@Input() person:Person=new Person();
@Output() sendDataToList=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendData(){
    this.sendDataToList.emit(this.person);
  }

}
