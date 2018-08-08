import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Resposta from './Resposta';

export default class Carta extends React.Component {
    
    exibeRespotas = () => {
        this.setState({exibeRespotas: true})
    }
    
    state = {
        exibeRespotas: false,
    }
    
    render() {
        const { exibeRespotas } = this.state
        return (
            <View style={{flex: 1 }}>
                {!exibeRespotas && ( <View style={{flex: 1 }}>
                    <View style={{ flexDirection:"row", alignSelf:'flex-start'}}>
                        <Text style={[styles.text,{top:32, left:10 }] } >{1}/{3}</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.text}> Titulo Pergunta </Text>
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
            
                { exibeRespotas && <Resposta/> }
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