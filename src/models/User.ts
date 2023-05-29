import Postagem from "./Postagem";

interface User {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    postagem?: Postagem[] | null
}

export default User;