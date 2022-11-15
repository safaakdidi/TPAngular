import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
colors=[
  'pink','lightblue','gray','lightyellow','coral','lightgreen'
]
  @HostBinding('style.color') color='gray';
@HostBinding('style.borderColor') border="pink";
  constructor() { }
@HostListener ('keyup') changeColor(){
this.color=this.colors[Math.floor(Math.random()*(this.colors.length-1)) ];
  this.border=this.colors[Math.floor(Math.random()*(this.colors.length-1))];

}
}
