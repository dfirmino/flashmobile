import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import Cabecalho from './Cabecalho';
import WidgetNovoBaralho from './WidgetNovoBaralho';
import BaralhoPreview from './BaralhoPreview';
import { preencherStore } from '../actions'
import { getBaralhos } from "../util/api"
import { connect } from 'react-redux'

class Home extends React.Component {
    
    componentDidMount() {
        let { preencherStore } = this.props
        getBaralhos().then(baralhos => preencherStore(baralhos))
    }
    
    navigate = () => {
        const { navigation } = this.props
        navigation.navigate('Novo')
    }
    navigateDetalhe = baralho => {
        const { navigation } = this.props
        navigation.navigate('Detalhe', { baralhoTitulo: baralho.title})
    }
    
    render() {
        let { baralhos } = this.props
        let arrayBaralhos = Object.values(baralhos)
        return (
            <View>
                <ScrollView>
                    { arrayBaralhos && arrayBaralhos.map((baralho,indice) => (
                        <BaralhoPreview key={indice} click={() => this.navigateDetalhe(baralho) } title={baralho.title} />
                    )) }
                </ScrollView>
                
                {!arrayBaralhos && <Text> Você não possui Baralhos Cadastrados</Text> }
            </View>
        )
    }
}


function mapStateToProps (state) {
    return {
        ...state,
    }
}

function mapDispatchToProps (dispatch) {
  
    return {
      preencherStore: (baralhos) => dispatch(preencherStore(baralhos))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)