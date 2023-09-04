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
import Contacts from "../../components/Contacts/Contacts.js"
import { useNavigation } from '@react-navigation/native';


const SpecificEvent = (props) => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const onpressVolver = () => {
        navigation.navigate("Home");
    }

    return(
        <View style={styles.container}>
            <Text onPress={onpressVolver}>  Volver!</Text>
            <View style={styles.fondoLogo}> <Image
                source={ArgTeamLogo}
                style={styles.imgStyle}
            ></Image></View>
            <Text style={styles.nombreEvento}>{props.route.params.evento.nombre}</Text>
            <Text style={styles.desc}>{props.route.params.evento.descripcion} </Text> 
            <View style={styles.divDataEvent}>
                <View style = {styles.containerCadaFecha}>
                    <Text style={styles.titleCard}>Fecha Inicio</Text>
                    <Text style={styles.textStyle}>{props.route.params.evento.fechaInicio}</Text> 
                </View>
                <View style = {styles.containerCadaFecha}>
                    <Text style={styles.titleCardFinal}> Fecha Final</Text>
                    <Text style={styles.textStyle} >{props.route.params.evento.fechaFin}</Text>
                </View>
            </View>
            <Text style = {styles.tituloContactos}>Contactos</Text>
            <View style = {styles.contactos}>

                <Contacts></Contacts>
                <Contacts></Contacts>
                
            </View>
            <Text style = {styles.tituloContactos}>Coordinadores</Text>
            <View style = {styles.contactos}>
                <Contacts></Contacts>
                <Contacts></Contacts>
            </View>
        </View>
    );
};
/**/
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfcfcf",
        
        flex: 6,
    },  
    containerCadaFecha: {
        backgroundColor:'white',
        borderColor:'#1A4B8E',
        borderWidth:1,
        width:'50%',
        height:'30%',
        borderRadius:15,
        margin:3,flex:'center',alignItems:'center'
    },
    titleCardFinal:{
        width:'80%',
        height:'15%',
        textAlign:'center',
        rowGap:1,
        fontWeight: 'bold',
        color: '#6736CF',
        fontSize:15,
        paddingTop:8, 
    },
    tituloContactos:{
        color:'#1A4B8E', fontWeight:'500', fontSize:16, textAlign:'left',margin:5   
    },
    titleCard: {
        width:'80%',
        height:'15%',
        textAlign:'center',
        rowGap:1,
        fontWeight: 'bold',
        color: '#E742EB',
        fontSize:15,
        paddingTop:8, 
    },  
    contactos:{
        width: '100%',
        flexDirection:"row",alignItems: "center", 
        flex:1, justifyContent: 'flex-start', maxHeight:'10%'    //IMPORTanteeeeee  

    },
    divDataEvent: {
        width:'100%',
        height:'20%',
        rowGap:1, marginTop:5, padding:0,
        alignItems: "center",
        flex:  1, flexDirection:'column',maxHeight:'30%'
    },
    dataEvent:{
        width:'50%',
        height:'50%',
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
        color:'white',marginLeft:30,marginRight:30,
        padding:20,marginTop:10,
        borderRadius:15,fontSize:15,fontWeight:'700',alignItems: "center",
        flex: "center", 
    },
    desc: {
        width:'80%',
        maxHeight:'15%',
        textAlign:'left',
        rowGap:1,
        color: '#1A4B8E',
        fontSize:15,
        padding:10,margin:10

    },
    
    textStyle:{
        height:'25%',
        width:'80%',
        color: '#1A4B8E',
        fontSize:13,
        padding:12,
        marginTop:10
    },
    
});

export default SpecificEvent;