import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyconferencesComponent } from './myconferences.component';

describe('MyconferencesComponent', () => {
  let component: MyconferencesComponent;
  let fixture: ComponentFixture<MyconferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyconferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyconferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
