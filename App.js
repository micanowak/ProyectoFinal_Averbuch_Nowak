import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './src/screens/LogInScreen/LogInScreen';

import Home from './src/screens/Home/HomeScreen';

export default function App() {
  
  //axios.get('localhost:3000/logInUsuario')
  
  return (
    <View style={styles.root}>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1A4B8E',
  },
});

//https://reactnative.dev/docs/navigation para conectar las screens pero primero hago todas las pantallas y despues las conecto 
