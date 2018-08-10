import React from 'react'
import { View, Text, TextInput, TouchableHighlight, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux'

class CriarPergunta extends React.Component {
    state  = {
        validado: true,
        titulo:'',
        resposta:''
    }
    
    setTitle = title => {
        this.setState({ title })
    } 
    
    setResposta = resposta => {
        this.setState({ resposta })
    }
    
    render() {
        const { validado, titulo, resposta } = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                
                <Text style={styles.tituloPergunta}> Nova Pergunta </Text>
                
                <Text style={[styles.containerText]}> 
                    Escreva o titulo da pergunta 
                </Text>
                <TextInput 
                    style={{ width: 210, textDecorationLine:"none" }}
                    underlineColorAndroid='#7f8c8d'
                    value={titulo}
                    onChangeText={this.setTitle} /> 
                <Text style={styles.validate} >
                    {!validado && "Esse Campo é Obrigatório" } 
                </Text> 
                
                <Text style={[styles.containerText]}> 
                    Escreva a resposta da Pergunta 
                </Text>
                <TextInput 
                    style={{ width: 210, textDecorationLine:"none" }}
                    underlineColorAndroid='#7f8c8d'
                    multiline={true}
                    numberOfLines={4}
                    value={resposta}
                    onChangeText={this.setResposta}/> 
                <Text style={styles.validate} >
                    {!validado && "Esse Campo é Obrigatório" } 
                </Text> 
                
                <TouchableHighlight onPress={this.submit}> 
                    <View style={styles.btn}>
                        <FontAwesome name='send-o' style={[styles.btnText]}/>
                        <Text style={[styles.btnText]}> Enviar </Text>
                    </View>
                </TouchableHighlight>
            </KeyboardAvoidingView>
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
    },
    tituloPergunta: {
        fontSize: 30,
        fontWeight:'bold',
        lineHeight:38,
        top: -30
    },
})

function mapStateToProps (state) {
    return {
        ...state,
    }
}

export default connect(mapStateToProps,null)(CriarPergunta)