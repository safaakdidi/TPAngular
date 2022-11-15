import {RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./recrutement/cv/cv.component";
import {ColorComponent} from "./color/color.component";
import {MiniWorldComponent} from "./mini-world/mini-world.component";
import {CardComponent} from "./card/card.component";


const APP_ROUTING:Routes=[
  {path:'cv',component:CvComponent},
  {path:'color',component:ColorComponent},
  {path:'word',component:MiniWorldComponent},
  {path:'card',component:CardComponent}
]

export const ROUTING=RouterModule.forRoot(APP_ROUTING);
