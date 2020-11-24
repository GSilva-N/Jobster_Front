import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  faGithub = faGithub
  faLinkedin = faLinkedin

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  voltarAoTopo() {

  }


}
