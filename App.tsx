import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from './src/components/MainView'

export default function App() {
  return (
    <View style={styles.container}>
      <MainView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
