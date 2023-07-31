import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import LogInScreen from "./screens/LogInScreen/LogInScreen";
import axios from "axios";
import { useState } from "react";
import {
  NavigationContainer,
  StackRouter,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import HomeScreen from "./screens/Home/HomeScreen.js";

export default function App() {
  const [esUsuario, setEsUsuario] = useState(false);


  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#1A4B8E",
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          style={styles.root}
          options={{ title: "Inicio De Sesion" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#1A4B8E",
  },
});

//https://reactnative.dev/docs/navigation para conectar las screens pero primero hago todas las pantallas y despues las conecto
