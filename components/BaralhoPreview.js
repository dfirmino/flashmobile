import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
export default class BaralhoPreview extends React.Component {
    render() {
        const { click } = this.props
        return (
            <TouchableHighlight onPress={click} >
                <View style={styles.container}>
                    <View style={styles.containericon}>
                        <MaterialCommunityIcons name='cards-outline' size={40} color='#7f8c8d'/>
                    </View>
                    <View style={styles.containerText}>
                        <Text style={styles.text}>
                            Baralho de Teste
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
            )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent:'center',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      alignItems: 'center',
      height:80
    },
    containericon: {
        flex:0.2,
        justifyContent:'center',
        alignItems: 'flex-end',
    },
    containerText: {
        flex:0.8,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#7f8c8d'
    }
});