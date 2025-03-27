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

  ngAfterViewInit() {
    const fenetre = document.querySelector('.fenetre4') as HTMLElement;

    fenetre.addEventListener("mousedown", (e) => {
      let shiftX = e.clientX - fenetre.getBoundingClientRect().left;
      let shiftY = e.clientY - fenetre.getBoundingClientRect().top;

      function moveAt(pageX: number, pageY: number) {
        fenetre.style.left = pageX - shiftX + 'px';
        fenetre.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event: MouseEvent) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      fenetre.onmouseup = () => {
        document.removeEventListener("mousemove", onMouseMove);
        fenetre.onmouseup = null;
      };
    });

    fenetre.ondragstart = () => false;
  }
}
