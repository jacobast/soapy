import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapItemComponent } from './soap-item.component';

describe('SoapItemComponent', () => {
  let component: SoapItemComponent;
  let fixture: ComponentFixture<SoapItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoapItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
