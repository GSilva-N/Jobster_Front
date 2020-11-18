
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {

  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem('user', this.userLogin.nome)
      localStorage.setItem('link', this.userLogin.link)
      localStorage.setItem('linkFoto', this.userLogin.linkFoto)
      localStorage.setItem('token', this.userLogin.token)
      this.router.navigate(['/feed'])
    })

  }
}