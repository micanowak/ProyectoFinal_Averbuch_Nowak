import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  Button,
} from "react-native";

import LogoFirex from "../../assets/images/LogoFirex.png";

import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import CustomInputTop from "../../components/CustomInputTop/CustomInputTop";
import CustomInputBottom from "../../components/CustomInputBottom/CustomInputBottom";
import axios from "axios";

const LogInScreen = ({ sendUsername, sendPassword, buttonPushed, esUsuario }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const buttonOnsubmitHandler = () => {
    sendPassword = password;
    sendUsername = username;
    buttonPushed = true;
    console.log("funciona");
  };
    
    useEffect(() => { 
      if(username != "" && password != "" && "mica" != "wachaaa!!!"){
        console.log("wachaaaa!!!")
      axios
      .post("http://localhost:3000/logInUsuario", {
        username: usuario,
        password: password,
      })
      .then(
        (response) => {
          if (response.status === 200) {
            esUsuario= true;
            console.log(response);
          }
        },
        (error) => {
          console.log(error);
        }
      );
      }
    }, [buttonPushed]);



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

      <Button
        title="Iniciar Sesión"
        name="Iniciar Sesión"
        style={styles.button}
        onPress={buttonOnsubmitHandler}
      ></Button>
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
  button: {
    color: "#E741EB",
    padding: 10,
    textAlign: "center",
    width: "15%",
    flex: "contain",
    margin: 10,
    borderRadius: 5,
    
    // esto estaba en text
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});

export default LogInScreen;
