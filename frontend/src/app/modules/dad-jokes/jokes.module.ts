import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeContainerComponent } from './joke-container/joke-container.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingButtonsComponent } from './rating-buttons/rating-buttons.component';



@NgModule({
  declarations: [
    JokeContainerComponent,
    RatingButtonsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [JokeContainerComponent, RatingButtonsComponent],

})
export class JokesModule { }
