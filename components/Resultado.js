import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { removeNotificacao, criarNotificacao} from '../util/notificacao'

export default class Resultado extends React.Component {
    
    componentDidMount() {
        removeNotificacao()
        .then(criarNotificacao)
    }
    
    render() {
        let  { acertos,total,navigation, reload, title } = this.props
        return (
            <View style={[styles.container, { paddingLeft:30,paddingTop:50 }]}>
                <Text style={styles.containerText}> 
                    Parabéns você conclui todas as perguntas 👏
                </Text>
                <View style={styles.container}>
                    <Text style={[styles.containerText,{ left:-10 }]}> { (parseInt(acertos) / parseInt(total)) * 100 }% de Acertos </Text>
                </View>

                <TouchableHighlight onPress={() => {navigation.navigate('Detalhe', { baralhoTitulo: title}) }} style={{top:-95, left:-13 }}> 
                    <View style={[styles.btn]}>
                        <FontAwesome name='home' style={[styles.btnText]}/>
                        <Text style={[styles.btnText]}> Voltar </Text>
                    </View>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={reload} style={{top:-95, left:-13, marginTop:10 }}> 
                    <View style={[styles.btn]}>
                        <FontAwesome name='refresh' style={[styles.btnText]}/>
                        <Text style={[styles.btnText]}> Reiniciar </Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    containerText: {
        fontSize: 20,
        color: '#7f8c8d',
    },
    validate: {
        color: "#e74c3c",
        fontSize: 10
    },
    btn: {
        backgroundColor:'#7f8c8d',
        justifyContent:'center',
        flexDirection: 'row',
        padding:10,
        alignItems: 'center',
        width:160
    },
    btnText: {
        color:"#fff",
        fontSize:12
    }
})