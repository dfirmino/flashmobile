import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { novoBaralho } from '../util/api'
import { connect } from 'react-redux'
import { adicionarBaralho } from '../actions'

class CriarBaralho extends React.Component {
    state  = {
        value : ''
    }
    
    updateValue = value => {
        this.setState({ value })
    }
    
    submit = () => {
        let { adicionarBaralho, navigation } = this.props
        let value = this.state.value
        novoBaralho({[value]: { title: value, cartas: [] }})
        adicionarBaralho({[value]: { title: value, cartas: [] }})
        navigation.navigate('Home')
    }
    render() {
        const { value } = this.state
        
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={[styles.containerText]}> 
                    Escreva o nome do novo baralho 
                </Text>
                <TextInput 
                    style={{ width: 210, textDecorationLine:"none" }}
                    underlineColorAndroid='#7f8c8d' 
                    value={value} 
                    onChangeText={this.updateValue}/> 
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
    }
})


function mapDispatchToProps (dispatch) {
  
    return {
      adicionarBaralho: (baralho) => dispatch(adicionarBaralho(baralho))
    }
}

export default connect(null,mapDispatchToProps)(CriarBaralho)