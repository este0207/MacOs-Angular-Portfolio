import { Component, output } from '@angular/core';
import { MacBtnComponent } from "../mac-btn/mac-btn.component";
import { MailCaseComponent } from "../mail-case/mail-case.component";

@Component({
  selector: 'app-fenetre-mail',
  imports: [MacBtnComponent, MailCaseComponent],
  templateUrl: './fenetre-mail.component.html',
  styleUrl: './fenetre-mail.component.css'
})
export class FenetreMailComponent {

    remove = output();

  onQuit() {
    this.remove.emit();
  }
}
