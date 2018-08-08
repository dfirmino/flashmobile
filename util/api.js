import { AsyncStorage } from 'react-native'

const FLASHCARD_STORAGE = "FLASHCARD_STORAGE" 

export function novoBaralho(title) {
    return AsyncStorage.mergeItem(FLASHCARD_STORAGE,JSON.stringify(title))
}

export function getBaralhos() {
    return AsyncStorage.getItem(FLASHCARD_STORAGE)
}