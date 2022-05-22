import { TestBed } from '@angular/core/testing';

import { ShowStockPriceService } from './show-stock-price.service';

describe('ShowStockPriceService', () => {
  let service: ShowStockPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowStockPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
