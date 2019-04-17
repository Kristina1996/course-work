import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadConferencesComponent } from './read-conferences.component';

describe('ReadConferencesComponent', () => {
  let component: ReadConferencesComponent;
  let fixture: ComponentFixture<ReadConferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadConferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
