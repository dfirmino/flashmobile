import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Resposta from './Resposta';
import Resultado from './Resultado'
import { connect } from 'react-redux'

class Carta extends React.Component {
    
    static navigationOptions = ({navigation }) => {
        return {
          title: navigation.state.params.baralhoTitulo
        };
    };
    
    exibeRespotas = () => {
        this.setState({exibeRespotas: true})
    }
    
    acertou = () => {
        this.setState( state => ({
            ...state,
            exibeRespotas: false,
            numeroPergunta: parseInt(state.numeroPergunta) + 1,
            acertos: parseInt(state.acertos) + 1
        }))
    }

    errou = () => {
        this.setState( state => ({
            ...state,
            exibeRespotas: false,
            numeroPergunta: parseInt(state.numeroPergunta) + 1,
            erros: parseInt(state.erros) + 1
        }))
    }


    state = {
        exibeRespotas: false,
        numeroPergunta: 1,
        acertos: 0,
        erros: 0
    
    }
    
    render() {
        const { exibeRespotas, numeroPergunta,acertos } = this.state
        let { baralhoTitulo } = this.props.navigation.state.params
        let baralho  = this.props.baralhos[baralhoTitulo]
        let pergunta = baralho.cartas[numeroPergunta - 1]
        return (
            <View style={{flex: 1 }}>
                
                { (numeroPergunta -1)  >= baralho.cartas.length && <Resultado acertos={ acertos } total={baralho.cartas.length} navigation={ this.props.navigation }/> }
                
                { (numeroPergunta -1)  < baralho.cartas.length && !exibeRespotas && ( <View style={{flex: 1 }}>
                    <View style={{ flexDirection:"row", alignSelf:'flex-start'}}>
                        <Text style={[styles.text,{top:32, left:10 }] } >{ numeroPergunta }/{baralho.cartas.length}</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.text}> { pergunta.titulo } </Text>
                        </View>
                    
                        <View>
                            <TouchableOpacity 
                            style={[styles.btn, {backgroundColor: "#7f8c8d" }]}
                            onPress={this.exibeRespotas}>
                                <Text style={{color: "#fff" }}> Ver Resposta </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> )}
            
                { (numeroPergunta -1)  < baralho.cartas.length && exibeRespotas && <Resposta pergunta={ pergunta } numeroPergunta={ numeroPergunta } qtdPergunta={ baralho.cartas.length } acerto={this.acertou} erro={this.errou} /> }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'column'
    },
    text: {
        fontSize: 20,
        fontWeight:'bold',
        marginBottom:5,
        top:-25,
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
export default connect(mapStateToProps,null)(Carta)