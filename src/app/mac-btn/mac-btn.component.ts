import { Component, output } from '@angular/core';

@Component({
  selector: 'app-mac-btn',
  imports: [],
  templateUrl: './mac-btn.component.html',
  styleUrl: './mac-btn.component.css'
})
export class MacBtnComponent {

  remove = output();

  RemoveScreen() {
    console.log("test");
    this.remove.emit();
  }
}
