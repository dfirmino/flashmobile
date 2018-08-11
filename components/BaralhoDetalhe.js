import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';


class BaralhoDetalhe extends React.Component {
    
    static navigationOptions = ({navigation }) => {
        return {
          title: navigation.state.params.baralhoTitulo
        };
      };
    render() {
        const { navigation } = this.props
        let { baralhoTitulo } = this.props.navigation.state.params
        let baralho  = this.props.baralhos[baralhoTitulo]
        console.log('baralho no detalhe', baralho)
        
        return(
            <View style={styles.container}>
                    <View style={{ flex: 0.1, flexDirection:'row' }}>
                        <Text style={[styles.tituloBaralho]}> 
                            { baralhoTitulo }
                        </Text>
                    </View>
                    <View style={{ flex: 0.1, flexDirection:'row' }}>
                        <Text style={[styles.cartasBaralho]}>
                        { baralho.cartas.length } carta(s) 
                        </Text>
                    </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={ () => { navigation.navigate('NovaPergunta',  { baralhoTitulo }) } }>
                        <Text style={{color: "#7f8c8d" }} >Adic. Carta </Text> 
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.btn, {backgroundColor: "#7f8c8d" }]} onPress={ () => { navigation.navigate('Carta',  { baralhoTitulo }) } }> 
                        <Text style={{color: "#fff" }}>Iniciar Quiz </Text>
                    </TouchableOpacity>
                </View>
            </View>    
        )
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'column',
    },
    tituloBaralho: {
        fontSize: 30,
        fontWeight:'bold',
        lineHeight:38,
    },
    cartasBaralho: {
        fontSize:15,
        lineHeight:45,
        color: '#7f8c8d'
    },
    btn: {
        paddingTop:10,
        paddingBottom:10,
        borderWidth: 0.5,
        borderColor: '#7f8c8d',
        marginBottom:5,
        paddingLeft:50,
        paddingRight:50,
    },    

})

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps,null)(BaralhoDetalhe)