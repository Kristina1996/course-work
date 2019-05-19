import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YandexPaymentComponent } from './yandex-payment.component';

describe('YandexPaymentComponent', () => {
  let component: YandexPaymentComponent;
  let fixture: ComponentFixture<YandexPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YandexPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YandexPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
