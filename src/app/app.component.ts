import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FoldersComponent } from "./folders/folders.component";
import { FenetreNoteComponent } from "./fenetre-note/fenetre-note.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, AppBarComponent, FoldersComponent, FenetreNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'macOs-portfolio';
}
