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
       console.log(this.state)
    }
    
    navigate = () => {
        const { navigation } = this.props
        navigation.navigate('Novo')
    }
    navigateDetalhe = () => {
        const { navigation } = this.props
        navigation.navigate('Detalhe')
    }
    
    render() {
        console.log('state', this.state)
        return (
            <View>
                <ScrollView>
                    <Text> a </Text>
                    <BaralhoPreview click={this.navigateDetalhe} />
                    <BaralhoPreview click={this.navigateDetalhe} />
                    <BaralhoPreview click={this.navigateDetalhe} />
                    <BaralhoPreview click={this.navigateDetalhe} />
                </ScrollView>
            </View>
        )
    }
}


function mapStateToProps ({ baralhos }) {
    return {
        ...baralhos,
    }
}

function mapDispatchToProps (dispatch) {
  
    return {
      preencherStore: (baralhos) => dispatch(preencherStore(baralhos))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)