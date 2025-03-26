import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsIconsComponent } from './socials-icons.component';

describe('SocialsIconsComponent', () => {
  let component: SocialsIconsComponent;
  let fixture: ComponentFixture<SocialsIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
