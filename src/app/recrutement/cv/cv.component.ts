import { Component, OnInit } from '@angular/core';
import {Person} from "../../model/Person";
import {CVServiceService} from "../../services/cvservice.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
show=false;
show1=true;
persons:Person[]=[];
personSelected:Person=new Person();

  constructor(private cvService:CVServiceService) { }

  ngOnInit(): void {
   this.persons=this.cvService.persons;
  }
handleData(data:any){
   this.personSelected=data;
   this.show=true;}
}
