import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ComponentComponent } from './component/component.component';
import { ProductCardComponent } from './component/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
   
    ComponentComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
