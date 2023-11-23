import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import LogInScreen from "./screens/LogInScreen/LogInScreen";
import axios from "axios";
import MyDatePicker from "./screens/DatePicker";
import { useState } from "react";
import {
  NavigationContainer,
  StackRouter,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import HomeScreen from "./screens/Home/HomeScreen.js";
import SpecificEvent from "./screens/SpecificEvent/SpecificEvent";
import NewEventsDate from "./screens/NewEvents/NewEventsDate";
import NewEventsInfo from "./screens/NewEvents/NewEventsInfo";
import NewEventsContactList from "./screens/NewEvents/NewEventsContactList";
import NewContact from "./screens/NewContact/NewContact";
import Calendar from "./screens/Calendar/Calendar";
import ContactList from "./screens/ContactsList/ContactList";
import AgregarEquipo from "./screens/AgregarInscriptos/AgregarEquipo.js";
import AgregarParticipanteLibre from "./screens/AgregarInscriptos/AgregarParticipanteLibre.js";
import MostrarEquipos from "./screens/MostrarInscriptos/MostrarEquipos";
import MostrarParticipantes from "./screens/MostrarInscriptos/MostrarParticipantes";
import AgregarParticipanteEquipo from "./screens/AgregarInscriptos/AgregarParticipanteEquipo";
import AddContact from "./screens/NewContact/AddContact.js"

export default function App() {
  const [listaEventos, setListaEventos] = useState([]);
  const listaEvendonsSent = (listaaa) => {
    setListaEventos(...listaEventos, listaaa)
    console.log(listaEventos);
  }


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
          initialParams={listaEvendonsSent}
          options={{ title: "Inicio De Sesion" }}
        />
        <Stack.Screen
          name="SpecificEvent"
          component={SpecificEvent}
          initialParams={listaEventos}
          options={{ title: "Detalle evento específico" }}
        />        
        <Stack.Screen
          name="NewEventsInfo"
          component={NewEventsInfo}
          //initialParams={listaEvendonsSent}
          options={{ title: "New Events Info" }}
        />
        
        <Stack.Screen
          name="DatePicker"
          component={MyDatePicker}
          options={{ title: "DatePicker" }}
        />
        <Stack.Screen
          name="NewEventsDate"
          component={NewEventsDate}
          options={{ title: "Fecha nuevo evento" }}
        />
        <Stack.Screen
          name="MostrarParticipantes"
          component={MostrarParticipantes}
          options={{ title: "Mostrar Participantes" }}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContact}
          options={{ title: "Add Contact" }}
        />
        <Stack.Screen
          name="MostrarEquipos"
          component={MostrarEquipos}
          options={{ title: "Mostrar Equipos" }}
        />
        <Stack.Screen
          name="AgregarEquipo"
          component={AgregarEquipo}
          options={{ title: "Agregar Equipo" }}
        />
        <Stack.Screen
          name="AgregarParticipanteEquipo"
          component={AgregarParticipanteEquipo}
          options={{ title: "Agregar Participante Equipo" }}
        />
        <Stack.Screen
          name="AgregarParticipanteLibre"
          component={AgregarParticipanteLibre}
          options={{ title: "Agregar Participante Libre" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="NewContact"
          component={NewContact}
          //initialParams={listaEvendonsSent}
          options={{ title: "New Contact" }}
        />

        <Stack.Screen
          name="NewEventsContactList"
          component={NewEventsContactList}
          //initialParams={listaEvendonsSent}
          options={{ title: "New Events Contact List" }}
        />
        <Stack.Screen
          name="ContactList"
          component={ContactList}
          //initialParams={listaEvendonsSent}
          options={{ title: "Contact List" }}
        />

        <Stack.Screen
          name="Calendar"
          component={Calendar}
          //initialParams={listaEvendonsSent}
          options={{ title: "Calendar" }}
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
