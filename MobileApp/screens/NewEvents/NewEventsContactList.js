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
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png"
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import Contacts from "../../components/Contacts/ContactV2.js"
import back from "../../assets/images/backArrow.png"
import Search from "../../components/Search/Search.js"

const NewEventsContactList = () =>{
    const baseURL = "http://localhost:3000/AgregarEvento";
    const navigation = useNavigation();
    const route = useRoute();
    const [eventoNuevo, setEventoNuevo] = useState({});
    const [listaContactosSeleccionados, setListaContactosSeleccionados] = useState([{}]);

    //const {nombre, lugar, fechaInicio, fechaFin, descripcion, hospedaje, gastronomia, edicion, sponsors} = route.params;

    const buttonOnPressHandler = () =>{
        const NewEventtt = {
            nombre: nombre,
            lugar: lugar,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            descripcion: descripcion,
            hospedaje: hospedaje,
            gastronomia: gastronomia,
            numEdicionEvento: edicion,
            sponsors: sponsors
        }

        setEventoNuevo(NewEventtt);

        axios
            .post(baseURL, eventoNuevo)
            .then(
                (response) => {
                    if (response.status === 200) {
                        //navigation.navigate("Home");
                        console.log(response);
                    }
                },
                (res) => {
                    setError(res.response.data);
                }
            );
    }
    const onPressBack = () => {
        evento.preventDefault();
        navigation.navigate(backPage);
    
    }

    const onPressNewContact = () => {
        evento.preventDefault();
        navigation.navigate("NewContact");
    }

    const listaHandle = (lista) => {
        setListaContactosSeleccionados(lista);
    }

    return(
        <View style={styles.container}>
            <View style ={styles.fondoArriba}>
                <TouchableOpacity onAccessibilityTap={onPressBack}>
                    <Image source={back} style={styles.back} ></Image>
                </TouchableOpacity>
                <Text style ={styles.textArriba} >Seleccionar Contactos</Text> 
            </View>
            {/*            
            <Text style = {styles.plus}>+</Text>

            <Text style = {styles.tituloContactos}>Profesionales para contratar</Text>
            <View style = {styles.contactos}>
                <Contacts></Contacts>
                <Contacts></Contacts>
                <Contacts></Contacts>
                
    </View>*/}
            <Search listaContactosSeleccionados={listaHandle}></Search>
            <Text style = {styles.tituloContactos}>Contactos</Text>
            <View style = {styles.contactos}>
                
            {listaContactosSeleccionados.map((element) => <Contacts idContacto={element.ID}/>)}
                
            </View>
            <TouchableOpacity style = {styles.button} onPress={buttonOnPressHandler}>
                <Text style={styles.textButton}>Guardar</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button} onPress={onPressNewContact}>
                <Text style={styles.textButton}>Nuevo contacto</Text>
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
    },tituloContactos:{
        color:'#1A4B8E', fontWeight:'500', fontSize:16, textAlign:'left',margin:10, alignContent:'center'   ,marginTop:40
    }, contactos:{
        width: '80%', flex:2,
        flexDirection:"column",alignItems: "center", 
        flex:1, justifyContent: 'flex-start', maxHeight:'25%'    //IMPORTanteeeeee  

    }, button:{
        backgroundColor:'rgb(26, 75, 142)', marginTop:60,padding:10,borderRadius:15, width:'50%',height:'5%',alignContent:'center',alignItems:'center',
    },textButton:{
        color:'white', fontSize:'110%', 
    },fondoArriba: {
        width: "100%",
        height:'10%',
        backgroundColor: "#1A4B8E",
        alignItems: "center",
        flexDirection: "row",
        
    },back: {
        width: 30 ,
        height:20,
        position: 'absolute',
        marginLeft:10, 
        
    },textArriba:{
        color:'white',
        fontSize:23,  alignContent:'center', width:'70%', marginLeft:'28%',
    },
    plus:{
        fontSize:25, color:'#845FD3',borderColor:'#845FD3' //fucsia
        , borderWidth:2, borderRadius:20, paddingBottom:4, paddingRight:8, paddingLeft:8
    },
});

export default NewEventsContactList;