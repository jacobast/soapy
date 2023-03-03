import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSoapsComponent } from './saved-soaps.component';

describe('SavedSoapsComponent', () => {
  let component: SavedSoapsComponent;
  let fixture: ComponentFixture<SavedSoapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedSoapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedSoapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
