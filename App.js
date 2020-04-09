import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const state = {
    myState : 'this is a state'
  }

  return (
    <View >
      <Text>{state.myState}</Text>
    </View>
  );
}
