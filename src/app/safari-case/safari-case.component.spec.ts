import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariCaseComponent } from './safari-case.component';

describe('SafariCaseComponent', () => {
  let component: SafariCaseComponent;
  let fixture: ComponentFixture<SafariCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafariCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafariCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
