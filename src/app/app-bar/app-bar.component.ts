import { Component, output } from '@angular/core';
import { AppIconsComponent } from "../app-icons/app-icons.component";


@Component({
  selector: 'app-app-bar',
  imports: [AppIconsComponent],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.css'
})
export class AppBarComponent {

  exec = output<"mail"|"note"|"safari">();
  ShowMail() {
    this.exec.emit("mail");
  }

  ShowNote() {
    this.exec.emit("note");
  }

  ShowSafari() {
    this.exec.emit("safari");
  }

 
}
