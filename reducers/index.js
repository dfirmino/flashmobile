import { ADICIONAR_BARALHO, PREENCHER_STORE } from '../actions'

function baralhos (state = {}, action) {
    switch(action.type) {
        
        case PREENCHER_STORE: {
            return {
                state:action.baralho
            }
        }
        
        case ADICIONAR_BARALHO:
            return {
                ...state,
                ...action.baralho
            }
        default:
            return state
    }
}

export default baralhos