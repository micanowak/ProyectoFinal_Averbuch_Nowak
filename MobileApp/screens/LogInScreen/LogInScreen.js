import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  Button,
  Pressable,
  TouchableOpacity
} from "react-native";

import LogoFirex from "../../assets/images/LogoFirex.png";
import { useNavigation } from '@react-navigation/native';

import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import CustomInputTop from "../../components/CustomInputTop/CustomInputTop";
import CustomInputBottom from "../../components/CustomInputBottom/CustomInputBottom";
import axios from "axios";

const LogInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const buttonOnsubmitHandler = () => {
    axios
      .post("http://localhost:3000/logInUsuario", {
        username: username,
        password: password,
      })
      .then(
        (response) => {
          if (response.status === 200) {
            //esUsuario = true;
            navigation.navigate("Home");
            console.log(response);
          }
        },
        (res) => {
          setError(res.response); 
        }
      );
  };

  const { height } = useWindowDimensions();

  return (
    <View style={styles.root}>
      <Image
        source={LogoFirex}
        style={[styles.logoFirexStyle]}
        resizeMode="contain"
      />
      <Image
        source={ArgTeamLogo}
        style={[styles.argTeam_Logo]}
        resizeMode="contain"
      />
      <CustomInputTop
        value={username}
        setValue={setUsername}
        esTop={true}
        placeholder="Usuario"
        secureTextEntry={false}
      />
      <CustomInputBottom
        value={password}
        setValue={setPassword}
        esTop={false}
        placeholder="Contraseña"
        secureTextEntry={true}
      />

      <TouchableOpacity
        
        style={styles.button}
        onPress={buttonOnsubmitHandler}
      ><Text style = {styles.textButton}>Iniciar sesión</Text></TouchableOpacity>
      {error}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logoFirexStyle: {
    margin: 10,
    // maxWidth: 100,
    //  maxHeight: 75,
    width: 150,
    height: 75,
  },
  argTeam_Logo: {
    width: 300,
    height: 100,
    margin: 30,
  },
  /*button: {
    backgroundColor: "#E741EB",
    padding: 10,
    textAlign: "center",
    width: "30%",
    flex: "contain",
    margin: 10,
    borderRadius: 5,

    // esto estaba en text
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },*/
  button:{
    backgroundColor:'#E742EB', margin:10,padding:10,borderRadius:15, width:'35%',alignContent:'center',alignItems:'center',
},
textButton:{
    color:'white', fontSize:15, fontWeight: 'bold',

}
});

export default LogInScreen;
