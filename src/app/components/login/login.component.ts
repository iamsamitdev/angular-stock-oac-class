import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide = true
  error?: string | null = null

  constructor(private router: Router) { }

  onClickRegister() {
    this.router.navigate(['/register']);
  }

}
