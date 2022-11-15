import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../model/Person";
import {EmbaucheService} from "../../services/embauche.service";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCVComponent implements OnInit {
@Input() personDetails:Person=new Person();
  constructor(private embaucheService:EmbaucheService) { }

  ngOnInit(): void {
  }
  addPersonToEmbauche(){
    this.embaucheService.addEmbauche(this.personDetails);
  }

}
