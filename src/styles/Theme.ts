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
        transparencia: {
            nenhum: '00',        // 0%
            baixa: '14',         // 8%
            moderada: '29',      // 16%
            consideravel: '3D',  // 24%
            significativa: 'A3', // 64%
            alta: 'B8',          // 72%
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
