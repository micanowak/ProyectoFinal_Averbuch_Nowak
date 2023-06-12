import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './src/screens/LogInScreen/LogInScreen';
import axios from 'axios';
import { response } from 'express';

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

  axios.post('/logInUsuario', {
    username: usuario,
    password: password
  })
  .then((response) => {
    console.log(response);
    if(response.status === 200){

    } else {
      
    }
  }, (error) => {
    console.log(error);
  });
  
  return (
    <View style={styles.root}>
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
