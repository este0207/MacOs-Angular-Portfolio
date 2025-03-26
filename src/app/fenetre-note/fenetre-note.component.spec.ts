import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenetreNoteComponent } from './fenetre-note.component';

describe('FenetreNoteComponent', () => {
  let component: FenetreNoteComponent;
  let fixture: ComponentFixture<FenetreNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FenetreNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FenetreNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
