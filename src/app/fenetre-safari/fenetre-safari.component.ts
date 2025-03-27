import { Component, output } from '@angular/core';
import { MacBtnComponent } from "../mac-btn/mac-btn.component";
import { SafariCaseComponent } from "../safari-case/safari-case.component";

@Component({
  selector: 'app-fenetre-safari',
  imports: [MacBtnComponent, SafariCaseComponent],
  templateUrl: './fenetre-safari.component.html',
  styleUrl: './fenetre-safari.component.css'
})
export class FenetreSafariComponent {
remove = output();

  onQuit() {
    this.remove.emit();
  }
}
