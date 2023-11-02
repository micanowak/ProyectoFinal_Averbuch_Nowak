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

    const spoilerToShow = () => {
        navigation.navigate("NewEventsDate");
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
                {listaEventos.map((element) => <Card evento={element}/>)}
            </>
            <Button
                title="Agregar evento"
                name="Agregar evento"
                style={styles.buttonStyle}
                onPress={buttonAgregarOnPressHandler}
            />
            <Text onPress={spoilerToShow}>Calendario (spoiler)</Text>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfcfcf",
        alignItems: "center",
        flex: "center",
        flex: 6,
    },
    fondoLogo: {
        width:'100%',
        backgroundColor:'#1A4B8E',
        alignItems: "center",
        flex: "center",
    },
    buttonStyle: {
        width: '70%',
        height: '10%',
        backgroundColor: '#E741EB',
        color: '#1A4B8E',
        padding: 10,
        textAlign: "center",
        marginTop: 50,
        borderRadius: 5,
        flex: "contain"
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
