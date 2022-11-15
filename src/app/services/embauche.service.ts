import { Injectable } from '@angular/core';
import {Person} from "../model/Person";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private _embauches:Person[]=[];
  constructor(private toaster:ToastrService) {
    this._embauches=[];
  }

  get embauches(): Person[] {
    return this._embauches;
  }

  addEmbauche(person:Person):void{
    if(this._embauches.indexOf(person)<0){
      this._embauches.push(person);
      this.toaster.success('yeeey personne embauché');
    }else {
     this.toaster.error('ouuups!! already exists');
    }


  }

}
