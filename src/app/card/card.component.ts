import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
name='safa';
firstname='kedidi';
job='student';
path='img1.JPG';
  constructor() { }

  ngOnInit(): void {

  }

}
