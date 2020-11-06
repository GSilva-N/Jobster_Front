import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
<<<<<<< HEAD
=======
import { UserLogin } from '../model/UserLogin';
>>>>>>> 53ac71ffb2a786540f73cb81ba7fbf0c9d747961

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  cadastrar(user: User) {
    return this.http.post('http://localhost:8080/usuario/cadastrar', user)
  }
}
=======
  logar(userLogin: UserLogin){
    return this.http.post('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(user: User){
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user)
  }

  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if (token != null) {
      ok = true
    }
    return ok 
  }

  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if (token == null) {
      ok = true
    }
    return ok 


  }
}
>>>>>>> 53ac71ffb2a786540f73cb81ba7fbf0c9d747961
