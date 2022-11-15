import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from "@angular/forms";
import { CardComponent } from './card/card.component';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './recrutement/cv/cv.component';
import { ListCVComponent } from './recrutement/list-cv/list-cv.component';
import { ItemCVComponent } from './recrutement/item-cv/item-cv.component';
import { DetailCVComponent } from './recrutement/detail-cv/detail-cv.component';
import { MiniWorldComponent } from './mini-world/mini-world.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import {CVServiceService} from "./services/cvservice.service";
import { EmbaucheComponent } from './recrutement/embauche/embauche.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {ROUTING} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CardComponent,
    FilsComponent,
    CvComponent,
    ListCVComponent,
    ItemCVComponent,
    DetailCVComponent,
    MiniWorldComponent,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ROUTING,
  ],
  providers: [CVServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
