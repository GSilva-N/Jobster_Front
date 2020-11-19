import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  user: string
  link: string
  linkFoto: string

  constructor() { }

  ngOnInit() {

    window.scroll(0, 0)
    this.user = localStorage.getItem('user')
    this.link = localStorage.getItem('link')
    this.linkFoto = localStorage.getItem('linkFoto')

  }

}
