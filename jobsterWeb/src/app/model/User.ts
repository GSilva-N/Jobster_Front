import { Postagem } from './Postagem'

export class User {

    public id: number
    public nome: string
    public email: string
    public senha: string
    public link: string
    public linkFoto: string
    public postagem: Postagem[]

}