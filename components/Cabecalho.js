import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default class Cabecalho extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerAux}>
                    <Text style={[styles.containerText, styles.shadown]}>
                        FlashCards
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        alignItems: 'center',
        backgroundColor:'#d6d7da',
        flex: 0.1,
    },
    containerAux: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
        paddingTop:10
    },
    containerText: {
        fontSize: 20,
        color:'#fff',
        textAlign: 'center'
    },
    shadown: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
});
