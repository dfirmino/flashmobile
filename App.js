import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Home from './components/Home';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import CriarBaralho from './components/CriarBaralho';
import CriarPergunta from './components/CriarPergunta';
import BaralhoDetalhe from './components/BaralhoDetalhe'
import Carta from './components/Carta';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import baralhos from './reducers'
import { setNotificacao } from './util/notificacao'

export default class App extends React.Component {
  componentDidMount() {
    setNotificacao()
  }
  
  
  render() {
    return (
      <Provider store={createStore(baralhos)}>
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="#fff" hidden={ true }/>
            <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  
})

const Tabs = createMaterialTopTabNavigator({
  Home:{
    screen : Home,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='home' size={30} />
    },
    tabBarOptions:{
      style: {
        backgroundColor: 'red'
      },
    },
  },
  Novo: {
    screen: CriarBaralho,
    navigationOptions: {
      tabBarIcon: () => <Entypo name='plus' size={30} />
    }
  }
})

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    }
  },
  Detalhe: {
    screen : BaralhoDetalhe,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#d6d7da',
      },
    },
  },
  NovaPergunta: {
    screen: CriarPergunta,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#d6d7da',
      },
    },
  },
  Carta: {
    screen: Carta,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#d6d7da',
      },
    },
  },
})
