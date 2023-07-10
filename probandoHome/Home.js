import react from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Card from "./src/components/index.js";
import logo from './assets/ArgTeamLogo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image  source={require( './assets/ArgTeamLogo.png')} style={styles.imgStyle}></Image>
      {/*<Text style={styles.textStyle}>Try some of our most popular flavours!</Text>*/}
      <Card/>
      <Card/>
      <Card/>
      <Text style={styles.textStyle}>Mostrar más +</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cfcfcf',
    alignItems: 'center',
    flex:'center',
    flex:6
  },
  imgStyle:{
    marginTop:30,
    marginBottom:20,
    resizeMode: 'contain',
    width:150 ,
    height:50

  },
  textStyle:{
    color:'#845FD3',
    fontWeight: 'bold',
    margin:10,

  }
});