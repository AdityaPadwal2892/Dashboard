import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseProductGraphComponent } from './purchase-product-graph';

describe('PurchaseProductGraph', () => {
  let component: PurchaseProductGraphComponent;
  let fixture: ComponentFixture<PurchaseProductGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseProductGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseProductGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
