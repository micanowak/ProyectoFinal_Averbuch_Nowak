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
        <View style={styles.container}>
            <View style={styles.fondoLogo}> <Image
                source={ArgTeamLogo}
                style={styles.imgStyle}
            ></Image></View>
            <Text style={styles.nombreEvento}>Nombre del Santa rosa de la FO</Text>
            <Text style={styles.desc}>descripcion</Text> 
            <View style={styles.divDataEvent}>
                <DataEvent style={styles.dataEventLeft}></DataEvent> 
                <DataEvent style={styles.dataEventRight}></DataEvent>
            </View>
        </View>
    );
};
/**/
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfcfcf",
        alignItems: "center",
        flex: "center",
        flex: 6,
    },
    divDataEvent: {
        width:'80%',
        height:'30%',
        rowGap:1,
        padding:10,
        alignItems: "center",
        flex: "center",
    },
    dataEventLeft:{
        width:'80%',
        height:'100%',
        flex:'left'
    },dataEventRight:{
        width:'80%',
        height:'100%',
        flex:'right'
    },
    fondoLogo:{
        width:'100%',
        backgroundColor:'#1A4B8E',
        alignItems: "center",
        flex: "center",
    },
    imgStyle: {
        marginTop: 30,
        marginBottom: 20,
        resizeMode: "contain",
        width: 150,
        height: 50,
    },
    nombreEvento:{
        backgroundColor:'#1A4B8E',
        color:'white',margin:4,
        padding:20,marginTop:10,
        borderRadius:15,fontSize:15,fontWeight:'700'
    },
    desc: {
        width:'80%',
        height:'30%',
        textAlign:'left',
        rowGap:1,
        color: '#1A4B8E',
        fontSize:20,
        padding:10,

    },
});

export default SpecificEvent;