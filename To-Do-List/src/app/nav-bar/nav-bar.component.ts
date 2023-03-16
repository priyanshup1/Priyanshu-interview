import {Component, EventEmitter,Output} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'warn';
  }


}
