import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>type a thing below</Text>
      <TextInput style={styles.textInput} onChange={(e) => console.log(e.nativeEvent.text)} />
      <StatusBar style="auto" />yar
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    color: '#dda',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#dda',
    fontSize: 18,
  },
  textInput: {
    color: '#dda',
    fontSize: 18,
    backgroundColor: '#666',
    width: '90%',
    padding: 9,
  },

});
