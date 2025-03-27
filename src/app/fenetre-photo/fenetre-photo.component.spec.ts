import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenetrePhotoComponent } from './fenetre-photo.component';

describe('FenetrePhotoComponent', () => {
  let component: FenetrePhotoComponent;
  let fixture: ComponentFixture<FenetrePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FenetrePhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FenetrePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
