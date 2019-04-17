import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCategoriesComponent } from './read-categories.component';

describe('ReadCategoriesComponent', () => {
  let component: ReadCategoriesComponent;
  let fixture: ComponentFixture<ReadCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
