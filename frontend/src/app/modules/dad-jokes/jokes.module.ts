import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeContainerComponent } from './joke-container/joke-container.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightsComponent } from './highlights/highlights.component';



@NgModule({
  declarations: [
    JokeContainerComponent,
    HighlightsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [JokeContainerComponent, HighlightsComponent],

})
export class JokesModule { }
