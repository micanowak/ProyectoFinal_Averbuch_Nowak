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
import Contact from "../../components/Contacts/Contacts.js"
import back from "../../assets/images/backArrow.png"


const ContactList = () => {
    const navigation = useNavigation();
    const router = useRoute();
    const baseURL = "http://localhost:3000/getContactList";
    const [listaContactos, setListaContactos] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setListaContactos(response.data);
            console.log(listaContactos);
        });
    }, []);

    
    const onPressBack = () => {
        navigation.navigate("Home");

    }

    const onPressNewContact = (evento) =>{
        evento.preventDefault();
        navigation.navigate("NewContact", {idEvento:null, EvEnto:null});
    }


    return (
        <View style={styles.container}>
            <View style={styles.fondoArriba}>
                <TouchableOpacity onAccessibilityTap={onPressBack}> {/* No funciona */}
                    <Image source={back} style={styles.back} ></Image>
                </TouchableOpacity>
                <Text style={styles.textArriba} >Lista de Profesionales</Text>
            </View>

            <Text onPress={onPressBack}>Volver</Text>
            
            <View style={styles.contactos}>

                {listaContactos.map((element) => (<Contact Contacto={element} Evento={null}/>))}

            </View>
            <TouchableOpacity style={styles.button} onPress={onPressNewContact}>
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
    }, tituloContactos: {
        color: '#1A4B8E', fontWeight: '500', fontSize: 16, textAlign: 'left', margin: 10, alignContent: 'center', marginTop: 40
    }, contactos: {
        width: '80%', flex: 2, marginTop:20, marginBottom:10,
        flexDirection: "column", alignItems: "center",
        flex: 1, justifyContent: 'flex-start', maxHeight: '25%'    //IMPORTanteeeeee  

    }, button: {
        backgroundColor: 'rgb(26, 75, 142)', marginTop: 60, padding: 10, borderRadius: 15, width: '50%', height: '5%', alignContent: 'center', alignItems: 'center',
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