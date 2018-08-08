import React from 'react'
import {TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
export default class NovoBaralho extends React.Component {

    render() {
        const { click } = this.props
        return (
            <TouchableOpacity style={[styles.container, styles.shadow]} onPress={click}>
                <Text>
                    <Entypo name='plus' size={35} color='#fff' />
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        right:10,
        bottom:10,
        borderRadius:200,
        backgroundColor:'#d6d7da',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height:70,
        width:70
    },
    shadow: {
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 7,
        shadowOffset: {
          height: 1.5,
          width: 1.5
        },
        elevation: 6,
    }
})