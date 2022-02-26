import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#00e4ff' }]}
          onPress={() => {
            this.props.navigation.navigate('HoroScope')
          }}>
          <Text style={styles.buttonText}>Horoscope</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#0098ff' }]}
          onPress={() => {
            this.props.navigation.navigate('Joke');
          }}>
          <Text style={styles.buttonText}>Joke</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#008796' }]}
          onPress={() => {
            this.props.navigation.navigate('News');
          }}>
          <Text style={styles.buttonText}>News</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#00384f' }]}
          onPress={() => {
            this.props.navigation.navigate('Weather');
          }}>
          <Text style={styles.buttonText}>Weather</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
