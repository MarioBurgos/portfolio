import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CurtainsComponent } from './curtains/curtains.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CurtainsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    CurtainsComponent
  ]
})
export class SharedModule { }
