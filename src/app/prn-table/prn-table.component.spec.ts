import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrnTableComponent } from './prn-table.component';

describe('PrnTableComponent', () => {
  let component: PrnTableComponent;
  let fixture: ComponentFixture<PrnTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrnTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
