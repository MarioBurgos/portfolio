import { AfterViewChecked, Component, ElementRef, Input, OnInit, Renderer2, ViewChildren } from '@angular/core';
import { ICarouselItem } from './icarousel-item.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewChecked {

  @Input() items: ICarouselItem[] = [];

  /**
   * Final Properties
   */
  public currentPosition = 0;

  constructor( ) {
  }

  ngOnInit(): void {
    this.items.map((item, index) => {
      item.id = index;
      item.marginLeft = 0;
    });
  }

  ngAfterViewChecked(): void {
  }

 


  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find((item) => item.id === 0)!.marginLeft = -100 * position;
    console.log(position);
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition+1;

    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    this.items.find((i) => i.id === 0)!.marginLeft! = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;

    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find((i) => i.id === 0)!.marginLeft! = finalPercentage;
    this.currentPosition = backPosition;
  }
}
