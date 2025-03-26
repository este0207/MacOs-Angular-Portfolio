import { Component, input } from '@angular/core';

@Component({
  selector: 'app-socials-icons',
  imports: [],
  templateUrl: './socials-icons.component.html',
  styleUrl: './socials-icons.component.css'
})
export class SocialsIconsComponent {
  url = input("https://github.com/este0207");
  icon = input("fa-github")
}
