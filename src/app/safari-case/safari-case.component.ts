import { Component, input } from '@angular/core';

@Component({
  selector: 'app-safari-case',
  imports: [],
  templateUrl: './safari-case.component.html',
  styleUrl: './safari-case.component.css'
})
export class SafariCaseComponent {

  url = input("#");
  title = input("web title");
  image = input("/Listify.png");
}
