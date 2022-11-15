import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../model/Person";

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCVComponent implements OnInit {
  @Input() persons:Person[]=[];
@Output() sendDetails=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  handleData(data:any){
this.sendDetails.emit(data);
  }

}
