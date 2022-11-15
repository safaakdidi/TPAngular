import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-world',
  templateUrl: './mini-world.component.html',
  styleUrls: ['./mini-world.component.css']
})
export class MiniWorldComponent implements OnInit {
color="pink";
size='30px';
police="arial";
  constructor() { }

  ngOnInit(): void {
  }
  changeSize(input:string){
    this.size=input+'px'
  }

}
