import { ADICIONAR_BARALHO, PREENCHER_STORE, ADICIONAR_CARTA } from '../actions'

function baralhos (state = {baralhos:{} }, action) {
    switch(action.type) {
        case PREENCHER_STORE: {
            return {
                ...state,
                baralhos: {...action.baralho }
            }
        }
        case ADICIONAR_BARALHO:
            return {
                ...state,
                baralhos: {...state.baralhos , ...action.baralho }
            }
        case ADICIONAR_CARTA: {
            return { 
                baralhos: { 
                ...state.baralhos,
                [action.tituloBaralho] : { 
                        ...state.baralhos[action.tituloBaralho],
                        cartas:[...state.baralhos[action.tituloBaralho].cartas, { ...action.carta } ]                  
                    }
                }
            }
        }
        
        default:
            return state
    }
}

export default baralhos