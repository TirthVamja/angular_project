import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStockPriceComponent } from './show-stock-price.component';

describe('ShowStockPriceComponent', () => {
  let component: ShowStockPriceComponent;
  let fixture: ComponentFixture<ShowStockPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStockPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStockPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
