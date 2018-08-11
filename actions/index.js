export const ADICIONAR_BARALHO = 'ADICIONAR_BARALHO'
export const PREENCHER_STORE = 'PREENCHER_STORE'
export const ADICIONAR_CARTA = 'ADICIONAR_CARTA'

export function adicionarBaralho (baralho) {
    return {
        type: ADICIONAR_BARALHO,
        baralho
    }
}

export function preencherStore (baralho) {
    return {
        type: PREENCHER_STORE,
        baralho
    }
}

export function adicionarCarta (tituloBaralho,carta) {
    return {
        type: ADICIONAR_CARTA,
        tituloBaralho,
        carta
    }
}