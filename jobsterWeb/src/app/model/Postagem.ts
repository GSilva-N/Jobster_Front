import { Tema } from './Tema'
import { User } from './User'

export class Postagem {

    public id: number
    public contato: string
    public portfolio: string
    public modalidade: string
    public imagem: Blob
    public tema: Tema
    public usuario: User

}