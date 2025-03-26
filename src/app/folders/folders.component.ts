import { Component, input } from '@angular/core';

@Component({
  selector: 'app-folders',
  imports: [],
  templateUrl: './folders.component.html',
  styleUrl: './folders.component.css'
})
export class FoldersComponent {
  stylefolder = input("");
  text = input("Our projects");
}
