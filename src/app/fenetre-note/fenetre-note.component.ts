import { Component, output } from '@angular/core';
import { MacBtnComponent } from '../mac-btn/mac-btn.component';



@Component({
  selector: 'app-fenetre-note',
  imports: [MacBtnComponent],
  templateUrl: './fenetre-note.component.html',
  styleUrl: './fenetre-note.component.css'
})
export class FenetreNoteComponent {

remove = output();

  onQuit() {
    this.remove.emit();
  }
  
}
