import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

// You can import from local files

export default class App extends React.Component {
  render(){
    return (
      <View>
        <Text>Top News</Text>
      </View>
    );
  }
}