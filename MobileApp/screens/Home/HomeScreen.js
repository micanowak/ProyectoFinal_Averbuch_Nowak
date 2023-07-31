import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    useWindowDimensions,
    Button,
} from "react-native";
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
//import logoFirex from '../../assets/images/LogoFirex.png';
import Card from "../../components/Card/Card.js";
import NavBar from "../../components/NavBar/NavBar.js";

const HomeScreen = () => {
    const { height } = useWindowDimensions();
    
    return (
        <View style={styles.container}>
            <Image
                source={ArgTeamLogo /*require( '../../assets/images/ArgTeamLogo.png')*/}
                style={styles.imgStyle}
            ></Image>
            <Card />
            <Card />
            <Card />
            <Text style={styles.textStyle}>Mostrar más +</Text>
            <Button
                title="Agregar evento"
                name="Agregar evento"
                style={styles.buttonStyle}
            ></Button>
            <NavBar/> 
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
        width:'70%',
        height:'10%',
        backgroundColor:'#E741EB',
        color:'#1A4B8E',
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
