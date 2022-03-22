import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingButtonsComponent } from './rating-buttons.component';

describe('RatingButtonsComponent', () => {
  let component: RatingButtonsComponent;
  let fixture: ComponentFixture<RatingButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
