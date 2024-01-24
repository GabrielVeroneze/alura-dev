import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    cores: {
        primaria: '#5081FB',
        secundaria: '#7BA4FC',
        terciaria: '#96B9FD',
        fundo: {
            primaria: '#051D3B',
            secundaria: '#FFFFFF',
        },
        texto: {
            primaria: '#FFFFFF',
            secundaria: '#051D3B',
        },
    },
    fontes: {
        familia: {
            primaria: 'Inter',
            secundaria: 'Roboto Mono',
        },
        tamanho: {
            pequeno: '0.75rem',
            medio: '1rem',
            grande: '1.3125rem',
        },
    },
    paddings: {
        lateral: {
            pequeno: '1rem',
            medio: '2rem',
        },
    },
}
