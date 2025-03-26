import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacBtnComponent } from './mac-btn.component';

describe('MacBtnComponent', () => {
  let component: MacBtnComponent;
  let fixture: ComponentFixture<MacBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
