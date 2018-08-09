import { ADICIONAR_BARALHO, PREENCHER_STORE } from '../actions'

function baralhos (state = {baralhos:{} }, action) {
    switch(action.type) {
        case PREENCHER_STORE: {
            return {
                ...state,
                baralhos: {...action.baralho }
            }
        }
        
        case ADICIONAR_BARALHO:
            console.log('cheguei aqui')
            return {
                ...state,
                baralhos: {...state.baralhos , ...action.baralho }
            }
        default:
            return state
    }
}

export default baralhos