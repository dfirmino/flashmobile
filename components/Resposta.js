import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native'


// Animação retirada de : https://stackoverflow.com/questions/37445090/react-native-how-do-you-animate-the-rotation-of-an-image

export default class Resposta extends React.Component {
    state = {
        transform: [{ rotateY: new Animated.Value(0) }]
    }
    
    spinValue = new Animated.Value(0)
    
    componentDidMount() {
        Animated.timing(this.spinValue, {
         toValue: 1,
         duration: 500,
        })
        .start()
    }
    
    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        })
        return (
            <Animated.View style={{flex: 1, transform: [{rotateY: spin}] }}>
                <Animated.View style={[styles.container, { transform: [{rotateY: spin}] }]}>
                    
                    <View style={{ flexDirection: "row" }}>    
                        <Text style={{flexDirection: "row" , alignContent:'center', alignItems:'center', top:-65 }} >{1}/{3}</Text>
                    </View>
                    
                    <View style={{ flexDirection: "row" , alignContent:'center', alignItems:'center' }}>    
                        <Text style={[styles.text, {color: '#7f8c8d', top: -25 }]} >Resposta </Text>
                    </View>
                    
                    <View style={{ flexDirection: "row" , alignContent:'center', alignItems:'center' }}>
                        <Text style={[styles.text]}> Conteúdo da Resposta </Text>
                    </View>
                
                    <View>
                        <TouchableOpacity style={[styles.btn, { backgroundColor: "#2ecc71"}]}>
                            <Text style={{color: "#fff" }}> Acertou </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.btn, { backgroundColor: "#e74c3c"}]}>
                            <Text style={{color: "#fff" }}> Errou </Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </Animated.View>
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
