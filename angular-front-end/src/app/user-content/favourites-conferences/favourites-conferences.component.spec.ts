import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesConferencesComponent } from './favourites-conferences.component';

describe('FavouritesConferencesComponent', () => {
  let component: FavouritesConferencesComponent;
  let fixture: ComponentFixture<FavouritesConferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritesConferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
