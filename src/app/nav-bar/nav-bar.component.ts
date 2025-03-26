import { Component } from '@angular/core';
import { LinksComponent } from '../links/links.component';
import { SocialsIconsComponent } from '../socials-icons/socials-icons.component';

@Component({
  selector: 'app-nav-bar',
  imports: [LinksComponent, SocialsIconsComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
