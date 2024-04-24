import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  hide = true
  error?: string | null = null

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    // Do something
  }

  onClickCancel() {
    this.router.navigate(['/login']);
  }

}
