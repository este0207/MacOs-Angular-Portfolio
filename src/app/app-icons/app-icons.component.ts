import { Component, input } from '@angular/core';

@Component({
  selector: 'app-app-icons',
  imports: [],
  templateUrl: './app-icons.component.html',
  styleUrl: './app-icons.component.css'
})
export class AppIconsComponent {
  url = input("/icons/finder.png");
  iconclass = input("findericon");
}
