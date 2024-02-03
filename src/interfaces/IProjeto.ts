export interface IProjeto {
    id: number
    nome: string
    descricao: string
    codigo: string
    personalizacao: {
        corFundo: string
        linguagem: string
    }
}
