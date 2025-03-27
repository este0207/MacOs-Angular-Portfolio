import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenetreMailComponent } from './fenetre-mail.component';

describe('FenetreMailComponent', () => {
  let component: FenetreMailComponent;
  let fixture: ComponentFixture<FenetreMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FenetreMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FenetreMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
