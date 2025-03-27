import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailCaseComponent } from './mail-case.component';

describe('MailCaseComponent', () => {
  let component: MailCaseComponent;
  let fixture: ComponentFixture<MailCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
