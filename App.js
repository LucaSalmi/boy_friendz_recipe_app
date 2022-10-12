import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const andreasVariabel = "hejsan"; 
const andreasVariabel2 = 12; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Danne was here!</Text>
      <StatusBar style="auto" />
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
