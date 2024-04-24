import { Component, ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isExpanded = true
  isLoggedIn = true

  @ViewChild('sidenav', { static: true }) sidenav: any
  constructor() {}

  toggleSideBar() {
    this.sidenav.toggle();
  }
}
