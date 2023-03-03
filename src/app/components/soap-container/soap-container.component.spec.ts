import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapContainerComponent } from './soap-container.component';

describe('SoapContainerComponent', () => {
  let component: SoapContainerComponent;
  let fixture: ComponentFixture<SoapContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoapContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
