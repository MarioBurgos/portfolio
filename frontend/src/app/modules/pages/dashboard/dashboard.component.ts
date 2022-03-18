import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/carousel.const';
import { ICarouselItem } from '../../shared/carousel/icarousel-item.metadata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  carouselImages: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#section2',
    });
  }

  scrollTo() {

  }
}


