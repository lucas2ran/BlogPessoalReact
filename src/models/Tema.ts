import Postagem from "./Postagem"


export interface Tema {
  id: number
  descricao: string
  postagem?: Postagem[] | null
}