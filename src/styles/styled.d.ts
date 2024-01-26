import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        cores: {
            primaria: string
            secundaria: string
            terciaria: string
            fundo: {
                primaria: string
                secundaria: string
            }
            texto: {
                primaria: string
                secundaria: string
            }
            transparencia: {
                nenhum: string
                baixa: string
                moderada: string
                consideravel: string
                significativa: string
                alta: string
            }
        }
        fontes: {
            familia: {
                primaria: string
                secundaria: string
            }
            tamanho: {
                pequeno: string
                medio: string
                grande: string
            }
        }
        paddings: {
            lateral: {
                pequeno: string
                medio: string
            }
        }
    }
}
