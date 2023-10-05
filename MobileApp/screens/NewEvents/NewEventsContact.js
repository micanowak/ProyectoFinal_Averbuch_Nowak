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
import back from "../../assets/images/backArrow.png"


const NewEventsContact = () =>{
    const baseURL = "http://localhost:3000/insertContacto";
/*const navigation = useNavigation();
const { height } = useWindowDimensions();
const [descripcion, setDescripcion] = useState("");

const descripcionOnchangeHandler = (evento) => {
    setDescripcion(evento.target.value);
};*/
const navigation = useNavigation(); // Obtén la instancia de navegación

const onPressBack = () => {
    navigation.navigate("NewEventsInfo");

}
const buttonOnPressHandler = () => {
    navigation.navigate("NewEventsContactList")
}
    return(
        <View style = {styles.container}>
            <View style ={styles.fondoArriba}>
                <TouchableOpacity onPress={onPressBack}>
                    <Image source={back} style={styles.back} ></Image>
                </TouchableOpacity>
                <Text style ={styles.textArriba} >Nuevo contacto</Text>
            </View>
            
            <Text style={styles.desc}>
                Descrpción
            </Text>
        
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

            <TouchableOpacity style = {styles.button} onPress={buttonOnPressHandler}>
                <Text style={styles.textButton}>Siguiente</Text>
            </TouchableOpacity>
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
    },desc:{
        borderColor:'#E742EB',
        borderRadius:15,
        borderWidth:2,
        color:'white', 
        backgroundColor:'rgb(26, 75, 142)',
        paddingHorizontal:100,
        paddingVertical:50,
        marginTop:50,
        marginBottom:20,
        width:'70%',height:'15%', 
    },
    back: {
        width: 30 ,
        height:20,
        position: 'absolute',
        marginLeft:10, 
        
    },textArriba:{
        color:'white',
        fontSize:23,  alignContent:'center', width:'70%', marginLeft:'28%',
    },
    fondoArriba: {
        width: "100%",
        height:'10%',
        backgroundColor: "#1A4B8E",
        alignItems: "center",
        flexDirection: "row",
        
    },
    tituloMain:{
        backgroundColor:'#1A4B8E',
        color:'white',marginLeft:30,marginRight:30,
        padding:14,marginTop:30,
        borderRadius:15,fontSize:15,fontWeight:'700',marginLeft:30
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
        backgroundColor:'#E742EB', marginTop:80,padding:10,borderRadius:15, width:'35%',alignContent:'center',alignItems:'center',
    },
    textButton:{
        color:'white'
        
    },
    tituloContactos:{
        color:'#1A4B8E', fontWeight:'500', fontSize:16, textAlign:'left',margin:10, alignContent:'center'   ,marginTop:40
    }, contactos:{
        width: '100%',
        flexDirection:"row",alignItems: "center", 
        flex:1, justifyContent: 'flex-start', maxHeight:'10%'    //IMPORTanteeeeee  

    },
});

export default NewEventsContact;
