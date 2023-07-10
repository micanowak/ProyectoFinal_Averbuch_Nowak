import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import LogInScreen from "./screens/LogInScreen/LogInScreen";
import axios from "axios";
import { useState } from "react";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import HomeScreen from "./screens/Home/HomeScreen.js";

export default function App() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [buttonPushed, setButtonPushed] = useState(false);
  const [esUsuario, setEsUsuario] = useState(false);

  const nombreUsuario = (nom) => {
    setUsuario(nom);
  };
  const constrasenia = (con) => {
    setPassword(con);
  };

  const buttonPushedHandler = (bool) => {
    setButtonPushed(bool);

    if (bool) { 
      axios
        .post("http://localhost:3000/logInUsuario", {
          username: usuario,
          password: password,
        })
        .then(
          (response) => {
            if (response.status === 200) {
              setEsUsuario(true);
              console.log(response);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  if (esUsuario === true && buttonPushed === true) {
    navigation.navigate("Home");
  }

  /*<Button
        title="Iniciar Sesion"
        onPress={() =>
          navigation.navigate('Home', {name: 'Home'})
        }
      />*/
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          style={styles.root}
          options={{ title: "InicioDeSesion" }}
          buttonPushed={buttonPushedHandler}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    /*<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          style={styles.root}
          options={{ title: "InicioDeSesion" }}
        />
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      </Stack.Navigator>
    </NavigationContainer>
    <View style={styles.root}>
      <LogInScreen sendUsername={nombreUsuario} sendPassword={constrasenia} buttonPushed={buttonPushedHandler}/>
      NO ME FUNCIONA LA PRIMERA VEZ QUE SE INGRESA EL FORM, YA DESPUÉS SI || PUEDE LLEGAR A SERVIR FORM DATA 
    </View>*/
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#1A4B8E",
  },
});

//https://reactnative.dev/docs/navigation para conectar las screens pero primero hago todas las pantallas y despues las conecto
