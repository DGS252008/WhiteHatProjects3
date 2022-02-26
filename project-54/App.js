import * as React from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View>
      <View
        style={{width:200, height:100, marginTop:20, marginLeft: 60}}
      >
      <Button 
      color="#1d2951"
      title="Sound 1" 
      onPress={() => alert('Play Sound 1')}
      />
      </View>

      <View
        style={{width:200, height:100, marginTop:20, marginLeft: 60}}
      >
      <Button 
      color="#111e6c" 
      title="Sound 2" 
      onPress={() => alert('Player Sound 2')}
      />
      </View>

      <View
        style={{width:200, height:100, marginTop:20, marginLeft: 60}}
      >
      <Button 
      color="#0e4d92" 
      title="Sound 3" 
      
      onPress={() => alert('Play Sound 3')}
      />
      </View>

      <View
        style={{width:200, height:100, marginTop:20, marginLeft: 60}}
      >
      <Button 
      color="#0f52ba" 
      title="Sound 4" 
      onPress={() => alert('Play Sound 4')}
      />
      </View>

      <View
        style={{width:200, height:100, marginTop:20, marginLeft: 60}}
      >
      <Button 
      color="#1034a6" 
      title="Sound 5" 
      onPress={() => alert('Play Sound 5')}
      />
      </View>
    </View>
  );
}
