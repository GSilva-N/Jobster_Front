import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {


  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  modalidade: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  tituloTema: string

  listaUser: User[]

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit() {

    window.scroll(0, 0)
    this.findAllPostagens()
    this.findAllTemas()

  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByModalidadePostagem() {
    if (this.modalidade === '') {
      this.findAllPostagens()
    } else {
      this.postagemService.getByModalidadePostagem(this.modalidade).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  findByTituloTema() {
    if (this.tituloTema === "") {
      this.findAllTemas()
    } else {
      this.temaService.getByTituloTema(this.tituloTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }
  }

}
