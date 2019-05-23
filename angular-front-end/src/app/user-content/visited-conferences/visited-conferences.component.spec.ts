import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedConferencesComponent } from './visited-conferences.component';

describe('VisitedConferencesComponent', () => {
  let component: VisitedConferencesComponent;
  let fixture: ComponentFixture<VisitedConferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitedConferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
