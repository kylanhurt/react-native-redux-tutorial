import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import MainView from './src/components/MainView'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import toDoReducer from './src/redux/reducers/toDoReducer'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  toDoReducer,
  composeEnhancer(applyMiddleware(thunk)),
)

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainView />
      </View>
    </Provider>
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
