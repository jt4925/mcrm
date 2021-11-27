import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToolBarComponent } from './user-tool-bar.component';

describe('UserToolBarComponent', () => {
  let component: UserToolBarComponent;
  let fixture: ComponentFixture<UserToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
