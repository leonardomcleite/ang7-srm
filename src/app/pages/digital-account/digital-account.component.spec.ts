import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalAccountComponent } from './digital-account.component';

describe('DigitalAccountComponent', () => {
  let component: DigitalAccountComponent;
  let fixture: ComponentFixture<DigitalAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
