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
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
import axios from "axios";
import Contact from "../../components/Contacts/Contacts.js"
import back from "../../assets/images/backArrow.png"


const ContactList = () => {
    const navigation = useNavigation();
    const router = useRoute();
    const baseURL = "http://localhost:3000/getContactList";
    const [listaContactos, setListaContactos] = useState([]);
    const isFocused = useIsFocused();

    const getContacts = () => {
        axios.get(baseURL).then((response) => {
            setListaContactos(response.data);
            console.log(listaContactos);
        });
    }

    useEffect(() => {
        if (isFocused) {
            getContacts();
        }
    }, [isFocused]);


    const onPressBack = () => {
        navigation.navigate("Home");

    }

    const onPressNewContact = (evento) => {
        evento.preventDefault();
        navigation.navigate("NewContact", { idEvento: null, EvEnto: null });
    }


    return (
        <View style={styles.container}>
            <View style={styles.fondoArriba}>
                
                <Text style={styles.textArriba} >Lista de Profesionales</Text>
            </View>


            <View style={styles.contactos}>

                {listaContactos.map((element) => (<Contact Contacto={element} Evento={null} eliminarHandler={getContacts}/>))}

            </View>
            <TouchableOpacity style={styles.button} onPress={onPressNewContact}>
                <Text style={styles.textButton}>Nuevo contacto</Text>
            </TouchableOpacity>

            <Text style={styles.volver} onPress={onPressBack}>Volver!</Text>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfcfcf",
        alignItems: "center",
        flex: "center",
        flex: 6,
    },volver:{
        color:'#1a4b8e', textAlign:'center', margin:5,
    } , tituloContactos: {
        color: '#1A4B8E', fontWeight: '500', fontSize: 16, textAlign: 'left',  alignContent: 'center', marginTop: 40
    }, contactos: {
        width: '80%', flex: 1, marginTop: 20, marginBottom: 10, display:'flex',
        flexDirection: "column", alignItems: "center", 
        flex: 1, /*justifyContent: 'flex-start',marginLeft:'10%',*/ maxHeight: '50%'    //IMPORTanteeeeee  

    }, button: {
        backgroundColor: '#e741eb', marginTop: 60, padding: 10, borderRadius: 15, width: '50%', height: '5%', alignContent: 'center', alignItems: 'center',
    }, textButton: {
        color: 'white', fontSize: '110%',
    }, fondoArriba: {
        width: "100%",
        height: '10%',
        backgroundColor: "#1A4B8E",
        alignItems: "center",
        flexDirection: "row",

    }, back: {
        width: 30,
        height: 20,
        position: 'absolute',
        marginLeft: 10,

    }, textArriba: {
        color: 'white',
        fontSize: 23, alignContent: 'center', width: '70%', marginLeft: '28%',
    },
    plus: {
        fontSize: 25, color: '#845FD3', borderColor: '#845FD3' //fucsia
        , borderWidth: 2, borderRadius: 20, paddingBottom: 4, paddingRight: 8, paddingLeft: 8
    },
});

export default ContactList;