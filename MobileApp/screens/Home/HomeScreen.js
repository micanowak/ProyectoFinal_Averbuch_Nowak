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
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonStyle}
                onPress={buttonAgregarOnPressHandler}>
                    <Text style={{ color: 'white' }}>Agregar evento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                onPress={buttonContactListOnPressHandler}>
                    <Text style={{ color: 'white' }}>Ver Lista Contactos</Text> {/* esto quedaría mucho mejor en un nav */}
                </TouchableOpacity>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A4B8E",
        alignItems: "center",
        width:'100%'
    },
    fondoLogo: {
        width: '100%',
        backgroundColor: '#1A4B8E',
        alignItems: "center",
        flex: "center",
        height:'10%',
    },

    buttonStyle: {
        width: '80%',
        height: '30%',
        backgroundColor: '#845FD3',
        color: '#cfcfcf',
        padding: 10,
        textAlign: "center",
        marginTop: 15,
        borderRadius: 5,
        flex: "contain", marginLeft: '20%',marginRight: '20%',   display: 'flex', display:'inline-table'

    },
    imgStyle: {
        marginTop: '5%',
        marginBottom: '5%',
        resizeMode: "contain",
        width: 150,
        height: 50,
    },
    containerButton:{
        width:'80%',
        display:'flex',
        alignItems:'center',
        marginTop:'10%'
    }
});

export default HomeScreen;
