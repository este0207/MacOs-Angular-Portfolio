import { Component, output } from '@angular/core';
import { MacBtnComponent } from '../mac-btn/mac-btn.component';

@Component({
  selector: 'app-fenetre',
  imports: [MacBtnComponent],
  templateUrl: './fenetre.component.html',
  styleUrl: './fenetre.component.css'
})
export class FenetreComponent {

  // remove = output();

  // onQuit() {
  //   this.remove.emit();
  // }
}
