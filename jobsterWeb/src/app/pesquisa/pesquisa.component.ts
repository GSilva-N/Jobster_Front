import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  modalidade: string

  listaPostagens: Postagem[]

  constructor(
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.findAllPostagens()
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByModalidadePostagem() {
    if (this.modalidade == '') {
      this.findAllPostagens()
    } else {
      this.postagemService.getByModalidadePostagem(this.modalidade).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

}
