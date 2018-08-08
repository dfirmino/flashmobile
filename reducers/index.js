import { ADICIONAR_BARALHO, PREENCHER_STORE } from '../actions'

function baralhos (state = {baralhos:{} }, action) {
    switch(action.type) {
        
        case PREENCHER_STORE: {
            return {
                ...state,
                [baralhos]: {...action.baralho }
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