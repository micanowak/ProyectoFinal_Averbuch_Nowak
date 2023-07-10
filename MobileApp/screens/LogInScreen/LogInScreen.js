import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  Button,
  Pressable
} from "react-native";

import LogoFirex from "../../assets/images/LogoFirex.png";

import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import CustomInputTop from "../../components/CustomInputTop/CustomInputTop";
import CustomInputBottom from "../../components/CustomInputBottom/CustomInputBottom";
import axios from "axios";

const LogInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        (error) => {
          console.log(error);
        }
      );
  };

  /*useEffect(() => { 
      
      }
    });*/

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
  /*button: {
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
  },*/
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default LogInScreen;
