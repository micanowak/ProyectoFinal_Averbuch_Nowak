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
import DataEvent from "../../components/DataEvent/DataEvent.js";


const SpecificEvent = () => {
    const { height } = useWindowDimensions();

    return(
        <View style={styles.root}>
            <Image
                source={ArgTeamLogo}
                style={styles.imgStyle}
            ></Image>
            <Text style={styles.nombreEvento}>Nombre del evento</Text>
            <Text style={styles.desc}>descripcion</Text> 
            <DataEvent></DataEvent> 
        </View>
    );
};

const syles = StyleSheet.create({
    imgStyle: {
        marginTop: 30,
        marginBottom: 20,
        resizeMode: "contain",
        width: 150,
        height: 50,
    },
    nombreEvento:{
        backgroundColor:'#1A4B8E',
        color:'white',
    },
    desc: {
        width:'80%',
        height:'50%',
        textAlign:'left',
        rowGap:1,
        color: '#1A4B8E',
        fontSize:20,
        padding:10,

    },
});

export default SpecificEvent;