import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    useWindowDimensions,
    Button,
    TouchableOpacity
} from "react-native";
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import Card from "../../components/Card/Card.js";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ sendlistaEventos }) => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [listaEventos, setListaEventos] = useState([]);
    const baseURL = "http://localhost:3000/getEvents";

    const buttonAgregarOnPressHandler = () => {
        navigation.navigate("NewEventsDate");
    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setListaEventos(response.data);
            console.log(listaEventos);
            sendlistaEventos(listaEventos);
        });
    }, []);

    const buttonContactListOnPressHandler = () => {
        navigation.navigate("ContactList");
    }

    return (
        <View style={styles.container}>
            <View style={styles.fondoLogo}>
                <Image
                    source={ArgTeamLogo}
                    style={styles.imgStyle}
                />
            </View>
            <>
                {listaEventos.map((element) => (<Card key={element.id} evento={element} />))}
            </>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={buttonAgregarOnPressHandler}>

                <Text style={{ color: 'white' }}>Agregar evento</Text>
            </TouchableOpacity>
            {/*<Text onPress={spoilerToShow}>Calendario (spoiler)</Text>*/}
            <TouchableOpacity style={styles.buttonStyle}
                onPress={buttonContactListOnPressHandler}>

                <Text style={{ color: 'white' }}>Ver Lista Contactos</Text> {/* esto quedaría mucho mejor en un nav */}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfcfcf",
        alignItems: "center",
        justifyContent: "center",
    },
    fondoLogo: {
        width: '100%',
        backgroundColor: '#1A4B8E',
        alignItems: "center",
        flex: "center",
    },
    buttonStyle: {
        width: '35%',
        height: '4%',
        backgroundColor: 'rgb(26, 75, 142)',
        color: '#1A4B8E',
        padding: 10,
        textAlign: "center",
        marginTop: 50,
        borderRadius: 5,
        flex: "contain", margin: '20%',
    },
    imgStyle: {
        marginTop: 30,
        marginBottom: 20,
        resizeMode: "contain",
        width: 150,
        height: 50,
    },

});

export default HomeScreen;
