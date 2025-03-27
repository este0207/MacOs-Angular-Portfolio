import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenetreSafariComponent } from './fenetre-safari.component';

describe('FenetreSafariComponent', () => {
  let component: FenetreSafariComponent;
  let fixture: ComponentFixture<FenetreSafariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FenetreSafariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FenetreSafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
