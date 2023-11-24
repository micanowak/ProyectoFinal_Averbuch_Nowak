import react, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import phoneIcon from "../../assets/images/phoneIcon.png";
import mailIcon from "../../assets/images/mailIcon.png";
import axios from "axios";

const Contact = ({ Contacto, Evento, eliminarHandler }) => {

    const baseURL = "http://localhost:3000/deleteProfesionalFromEvent";
    const baseURL2 = "http://localhost:3000/deleteProfesional/" + Contacto.ID;

    const eliminarOnPressHandler = () => {

        const ids= { id: Contacto.ID, idE: Evento };
        console.log(ids);

        if (Evento!= null) {
            axios
                .delete(baseURL, {data:ids})
                .then((response) => {
                    console.log({ id: Contacto.ID, idE: Evento });
                    console.log(response.data);
                    eliminarHandler();
                })
                .catch((error) => {
                    console.error("Error al eliminar el personaje:", error);
                });
        } else {
            axios
                .delete(baseURL2)
                .then((response) => {
                    console.log(response.data);
                    eliminarHandler();
                })
                .catch((error) => {
                    console.error("Error al eliminar el personaje:", error);
                });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleCard}>{Contacto.nombre}</Text>
            <Text style={styles.titleCardRol}>{Contacto.rol}</Text>
            <TouchableOpacity>
                <Text style={styles.titleCardEliminar} onPress={eliminarOnPressHandler}>Eliminar</Text>
            </TouchableOpacity>
            {/*<View style={styles.containerPics}>
                <Image source={phoneIcon} style={styles.imgStyle}></Image>
                <Image source={mailIcon} style={styles.imgStyle}></Image>
    </View>*/}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRightColor: '#1A4B8E',
        borderRightWidth: 3,
        flexDirection: 'row',
        width: '90%',
        height: '50%',
        borderRadius: 15, margin:10,
        /*marginLeft: '25%',*/ display:'flex',  alignItems: 'center', flex: 1,
        justifyContent: 'center', 
    },
    titleCard: {
        height: '40%',
        marginLeft: 0,/*marginTop:'10%',*/
        textAlign: 'left',
        rowGap: 1,
        fontWeight: 'bold',
        color: '#1A4B8E',
        fontSize: 12,
        display:'flex', 
        fontSize:'15',  alignItems:'center'
    },  
    titleCardRol: {
        height: '40%',
        marginLeft: 15,/*marginTop:'10%',*/
        textAlign: 'left',
        rowGap: 1,
        color: '#1A4B8E',
        fontSize: 12,
        display:'flex', 
        fontSize:'15', alignItems:'center'
    },
    titleCardEliminar: {
        height: '40%',
        marginLeft: 25,
        textAlign: 'center',
        rowGap: 1,
        color: '#e741eb',
        fontSize: 12,
        display:'flex',  /*marginTop:'10%',*/
        fontSize:'15'
    },
    /*containerPics: {
        width: '50%', height: '90%', marginBottom: 15, alignItems: 'center', flexDirection: 'column', marginTop: 10,
    },*/
    textStyle: {
        height: '25%',
        width: '80%',
        color: '#1A4B8E',
        fontSize: 18,
        padding: 4, flexDirection: 'row', flex: 1, alignContent: 'center', alignItems: 'center',
    },
    imgStyle: {
        width: '40%', marginTop: 5,
        height: '40%',
    }
});


export default Contact;