import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeContainerComponent } from './joke-container/joke-container.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    JokeContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [JokeContainerComponent],

})
export class JokesModule { }
