import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { List } from './app/modules/list/list';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.text}>Shopping List</Text>
        {/* <Text style={styles.text}>type a thing below</Text>
        <TextInput style={styles.textInput} onChange={(e) => console.log(e.nativeEvent.text)} /> */}
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
    paddingTop: 22,
  },
  text: {
    color: '#dda',
    fontSize: 22,
    height: 50,
    borderWidth: 1,
    borderColor: 'green'
  },
  textInput: {
    color: '#dda',
    fontSize: 18,
    backgroundColor: '#666',
    width: '90%',
    padding: 9,
  },

});
