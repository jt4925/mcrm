import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAComponent } from './layout-a.component';

describe('LayoutAComponent', () => {
  let component: LayoutAComponent;
  let fixture: ComponentFixture<LayoutAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
