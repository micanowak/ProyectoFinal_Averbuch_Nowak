import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import LogoFirex from '../../assets/images/LogoFirex.png';

import ArgTeamLogo from '../../assets/images/ArgTeamLogo.png';
import CustomInputTop from "../../components/CustomInputTop/CustomInputTop";
import CustomInputBottom from "../../components/CustomInputBottom/CustomInputBottom";
import CustomButton from "../../components/CustomButton/CustomButton";

const LogInScreen = (sendUsername, sendPassword) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const buttonOnsubmitHandler = () => {
    sendPassword(password);
    sendUsername(username);

    <Text>Sí funciona</Text>
    
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

      <CustomButton
        name="Iniciar sesión"
        onClick={buttonOnsubmitHandler}
      ></CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
    alignItems: "center",
    padding: 20,
    },
    logoFirexStyle: {
    margin:10,
   // maxWidth: 100,
  //  maxHeight: 75,
    width: 150,
    height: 75
    },
    argTeam_Logo: {
        width: 300,
        height: 100,
        margin:30
    },
});

export default LogInScreen;
