import { Injectable } from '@angular/core';
import {Person} from "../model/Person";

@Injectable({
  providedIn: 'root'
})
export class CVServiceService {
  private _persons=[new Person(0,'safa','kedidi','img1.JPG',0,'student',22),
    new Person(1,'safou','kedidi','img2.JPG',1,'student',22),
    new Person(3,'saff','kedidi','img1.JPG',2,'student',22),
    new Person(3,'saff','kedidi','',2,'student',22)]

  get persons(): Person[] {
    return this._persons;
  }

  constructor() { }
}
