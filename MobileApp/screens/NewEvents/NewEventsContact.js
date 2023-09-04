import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    useWindowDimensions,
    Button,
    TextInput,
    TouchableOpacity,
} from "react-native";
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Contacts from "../../components/Contacts/Contacts.js"
import back from "../../assets/images/simboloMenor.png"


const NewEventsContact = () =>{
    const baseURL = "http://localhost:3000/NewEventsContact";
/*const navigation = useNavigation();
const { height } = useWindowDimensions();
const [descripcion, setDescripcion] = useState("");

const descripcionOnchangeHandler = (evento) => {
    setDescripcion(evento.target.value);
};*/
    return(
        <View style = {styles.container}>
            <View style ={styles.fondoArriba}>
                <Image source={back}
                style={styles.back}></Image>
                <Text style ={styles.textArriba} >Nuevo contacto</Text>
            </View>
            <Text style = {styles.tituloContactos}>Contactos</Text>
            <View style = {styles.contactos}>

                <Contacts></Contacts>
                <Contacts></Contacts>
            </View>
            <Text style = {styles.tituloContactos}>Profesionales contratados</Text>
            <View style = {styles.contactos}>
                <Contacts></Contacts>
                <Contacts></Contacts>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfcfcf",
        alignItems: "center",
        flex: "center",
        flex: 6,
    }, probar:{
        widht:'100%',
        height:'30%'
    },
    back: {
        
        
        width: 20,
        height:30,
        
        
    },textArriba:{
        color:'white',
        fontSize:23,  alignContent:'center', width:'70%',
    },
    fondoArriba: {
        width: "100%",
        height:'10%',
        backgroundColor: "#1A4B8E",
        alignItems: "center",
        flex: "center",
    },
    tituloMain:{
        backgroundColor:'#1A4B8E',
        color:'white',marginLeft:30,marginRight:30,
        padding:14,marginTop:30,
        borderRadius:15,fontSize:15,fontWeight:'700',alignItems: "center",
        flex: "center", 
    },
    
    nombrePag:
    {
        backgroundColor:'#1A4B8E',
        color:'white',marginLeft:30,marginRight:30,
        padding:20,marginTop:10,
        borderRadius:15,fontSize:15,fontWeight:'700',alignItems: "center",
        flex: "center", 
    },
    containerForm:{
        borderColor:'#6736CF',
        borderRadius:15,
        borderWidth:2,
        marginTop:20,
        padding:10,
        width:'70%',
    },
    eachForm:{
        borderColor:'#E742EB',
        borderRadius:15,
        borderWidth:2,
        paddingLeft:10,
        padding:5,
        margin:5,
        marginBottom:20,
    },
    button:{
        backgroundColor:'#E742EB', margin:10,padding:10,borderRadius:15, width:'35%',alignContent:'center',alignItems:'center',
    },
    textButton:{
        color:'white'
        
    },
    tituloContactos:{
        color:'#1A4B8E', fontWeight:'500', fontSize:16, textAlign:'left',margin:10, alignContent:'center'   ,
    }, contactos:{
        width: '100%',
        flexDirection:"row",alignItems: "center", 
        flex:1, justifyContent: 'flex-start', maxHeight:'10%'    //IMPORTanteeeeee  

    },
});

export default NewEventsContact;
