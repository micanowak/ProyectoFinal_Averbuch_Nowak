import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import LogInScreen from "./screens/LogInScreen/LogInScreen";
import axios from "axios";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import HomeScreen from "./screens/Home/HomeScreen.js";
import CustomInputTop from "./components/CustomInputTop/CustomInputTop";
import CustomButton from "./components/CustomButton/CustomButton";

export default function App() {
  //axios.get('localhost:3000/logInUsuario')
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const nombreUsuario = (nom) => {
    setUsuario(nom);
  };
  const constrasenia = (con) => {
    setPassword(con);
  };

  axios
    .post("localhost:3000/logInUsuario", {
      username: usuario,
      password: password,
    })
    .then(
      (response) => {
        console.log(response.status);
      },
      (error) => {
        console.log(error);
      }
    );

  /*<Button
        title="Iniciar Sesion"
        onPress={() =>
          navigation.navigate('Home', {name: 'Home'})
        }
      />*/
  return (
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
    </NavigationContainer>*/
    <View style={styles.root}>
      <LogInScreen sendUsername={nombreUsuario} sendPassword={constrasenia} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#1A4B8E",
  },
});

//https://reactnative.dev/docs/navigation para conectar las screens pero primero hago todas las pantallas y despues las conecto
