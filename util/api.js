import { AsyncStorage } from 'react-native'

const FLASHCARD_STORAGE = "FLASHCARD_STORAGE" 

export function novoBaralho(title) {
    return AsyncStorage.mergeItem(FLASHCARD_STORAGE,JSON.stringify(title))
}

export function getBaralhos() {
    return AsyncStorage.getItem(FLASHCARD_STORAGE)
        .then(decks => JSON.parse(decks));
 }

export function adicionarCartaStore(tituloBaralho,cartas) {
    return AsyncStorage.getItem(FLASHCARD_STORAGE)
        .then((baralho) => {
            const data = JSON.parse(baralho)
            const novosBaralhos = {
                ...data ,
                [tituloBaralho]: {
                    ...data[tituloBaralho],
                    cartas: [
                        ...data[tituloBaralho].cartas,
                        { ...cartas }
                    ]
                }
            }
            AsyncStorage.setItem(FLASHCARD_STORAGE, JSON.stringify(novosBaralhos))
          })
}