import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseProductGraph } from './purchase-product-graph';

describe('PurchaseProductGraph', () => {
  let component: PurchaseProductGraph;
  let fixture: ComponentFixture<PurchaseProductGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseProductGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseProductGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
