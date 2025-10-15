import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSectionComponent } from './graph-section.component';

describe('GraphSectionComponent', () => {
  let component: GraphSectionComponent;
  let fixture: ComponentFixture<GraphSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
