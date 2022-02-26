import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import HoroScope from './screens/Horoscope'
import Joke from './screens/Joke'
import News from './screens/News'
import Weather from './screens/Weather'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render(){
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  HoroScope: HoroScope,
  Joke: Joke,
  News: News,
  Weather: Weather
});

const AppContainer = createAppContainer(AppNavigator);
