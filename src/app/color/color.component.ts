import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  bgColor="gray";

  constructor() { }

  ngOnInit(): void {
  }
  changeColor({color}: { color: any }){
    this.bgColor=color.value;
  }
  handleData(data:any){
    this.bgColor=data
  }

}
