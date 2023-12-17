import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { SuperHeroService } from './Services/super-hero.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SuperHeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }