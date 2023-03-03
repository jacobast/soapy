import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSoapComponent } from './custom-soap.component';

describe('CustomSoapComponent', () => {
  let component: CustomSoapComponent;
  let fixture: ComponentFixture<CustomSoapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSoapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSoapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
