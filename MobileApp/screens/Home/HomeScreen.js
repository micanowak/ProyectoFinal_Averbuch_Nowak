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
//import logoFirex from '../../assets/images/LogoFirex.png';
import Card from "../../components/Card/Card.js";
import NavBar from "../../components/NavBar/NavBar.js";
import axios from "axios";

const HomeScreen = () => {
    const { height } = useWindowDimensions();

    const [listaEventos, setListaEventos] = useState([{}]); 
    const baseURL = "http://localhost:3000/getEvents";

    const buttonOnPressHandler = (e) => {
        e.preventDefault();
        console.log("entra");
        navigation.navigate("SpecificEvent");
    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            response.data.forEach(element => {
                console.log(element);
                setListaEventos([...listaEventos, element])  
            });
            console.log(listaEventos);
        });
    }, []);
    return (
        <View style={styles.container}>
            <Image
                source={ArgTeamLogo /*require( '../../assets/images/ArgTeamLogo.png')*/}
                style={styles.imgStyle}
            ></Image>
            <Card />
            <Card />
            <Card />
            <TouchableOpacity onPress={buttonOnPressHandler}>
                <Text>Press Here</Text>
            </TouchableOpacity>
            {/*<Text style={styles.textStyle} onPress={buttonOnPressHandler}>Mostrar más +</Text>*/}
            <Button
                title="Agregar evento"
                name="Agregar evento"
                style={styles.buttonStyle}
            ></Button>
            <NavBar />
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
    buttonStyle: {
        width: '70%',
        height: '10%',
        backgroundColor: '#E741EB',
        color: '#1A4B8E',padding: 10,
    textAlign: "center", margin: 10,
    borderRadius: 5,flex: "contain"
        /*color: "#E741EB",
    
    width: "15%",
    ",
   */
    },
    imgStyle: {
        marginTop: 30,
        marginBottom: 20,
        resizeMode: "contain",
        width: 150,
        height: 50,
    },
    textStyle: {
        color: "#845FD3",
        fontWeight: "bold",
        margin: 10,
    },
});
export default HomeScreen;
