import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();
  @Input() isOpened?: boolean

  pageName: string = 'Stock'
  version = '1.0.0'

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onClickSignout() {
    // Add signout logic here
  }

}
