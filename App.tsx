import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './app/store'
import { Provider } from 'react-redux'
import List from './app/modules/list';
import Header from './app/modules/header';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <List />
        <StatusBar style="light" />
      </View>
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    color: '#dda',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 38,
  },
  textInput: {
    color: '#dda',
    fontSize: 18,
    backgroundColor: '#666',
    width: '90%',
    padding: 9,
  },

});
