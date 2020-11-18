import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]


  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number


  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    this.findAllTemas()
  }

  publicar() {

    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if (this.postagem.contato == null || this.postagem.portfolio == null || this.postagem.modalidade == null) {
      this.alert.showAlertDanger('Preencha os campos: Contato, portfolio e modalidade para prosseguir!')
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {

        this.postagem = resp
        this.postagem = new Postagem()
        this.alert.showAlertSuccess('Postagem realizada com sucesso!')
        this.findAllPostagens()
        this.router.navigate(['/feed'])
      })
    }
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }
}
