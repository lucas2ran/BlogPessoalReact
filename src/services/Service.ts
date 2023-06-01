import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export const login = async (url: string, dados: object, setDados: any) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data.token)
}

export const cadastrarUsuario = async (url: string, dados: object, setDados: any) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const busca = async (url: any, setDados: any, header: any) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

export const buscaId = async (url: any, setDados: any, header: any) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

export const post = async (url: string, dados: object, setDados: any, header: any) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const put = async (url: string, dados: object, setDados: any, header: any) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deleteId = async (url:any, header: any) => {
  await api.delete(url, header)
}
