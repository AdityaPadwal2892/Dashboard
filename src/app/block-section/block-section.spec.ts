import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSection } from './block-section';

describe('BlockSection', () => {
  let component: BlockSection;
  let fixture: ComponentFixture<BlockSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
