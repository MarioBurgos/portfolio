import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './modules/pages/pages.module';
import { ChuckJokeService } from './services/chuck-joke.service';
import { DadJokeService } from './services/dad-joke.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
  ],
  exports:[],
   providers: [
    DadJokeService,
    ChuckJokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
