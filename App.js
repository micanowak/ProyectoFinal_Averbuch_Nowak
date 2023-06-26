import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './src/screens/LogInScreen/LogInScreen';
import axios from 'axios';
import { response } from 'express';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from './src/screens/Home/HomeScreen';

export default function App() {
  
  //axios.get('localhost:3000/logInUsuario')
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const nombreUsuario = (nom) => {
    setUsuario(nom);
  }
  const constrasenia = (con) => {
    setPassword(con);
  }

  axios.post('localhost:3000/logInUsuario', {
    username: usuario,
    password: password
  })
  .then((response) => {
    console.log(response.status);
  }, (error) => {
    console.log(error);
  });
  
  return (
    
    <View style={styles.root}>
      <Home/>
      <LogInScreen sendUsername={nombreUsuario} sendPassword={constrasenia} />
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
