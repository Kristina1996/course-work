import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfComponent } from './view-conf.component';

describe('ViewConfComponent', () => {
  let component: ViewConfComponent;
  let fixture: ComponentFixture<ViewConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
