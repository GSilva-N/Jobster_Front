import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  postagem: Postagem = new Postagem()


  constructor(
    private postagemService: PostagemService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  publicar() {
    if (this.postagem.contato == null || this.postagem.portfolio == null || this.postagem.modalidade == null) {
      alert('Preencha os campos: Contato, portfolio e modalidade para prosseguir!')
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        alert('Postagem realizada com sucesso!')
        this.router.navigate(['/feed'])
      })
    }
  }
}
