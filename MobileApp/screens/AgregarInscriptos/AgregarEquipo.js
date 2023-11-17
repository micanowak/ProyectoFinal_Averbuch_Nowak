import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    useWindowDimensions,
    TextInput,
    TouchableOpacity,
} from "react-native";
//import DatePicker from "react-native-datepicker"
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import back from "../../assets/images/backArrow.png"

const AgregarEquipo = () => {
    const route = useRoute();
    const baseURL = "http://localhost:3000/AgregarEquipo";
    const baseURL2 = "http://localhost:3000/insertInscriptoEventoEquipos";
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const [nombre, setNombre] = useState("");
    const [celularContactoReferencia, setCelularContactoReferencia] = useState(0);
    const [nombreContactoReferencia, setNombreContactoReferencia] = useState('');
    const [apellidoContactoReferencia, setApellidoContactoReferencia] = useState('');
    const { idEvento, EvEnto } = route.params;

    const nombreOnchangeHandler = (Contacto) => {
        setNombre(Contacto.target.value);
    };
    const ApeOnchangeHandler = (Contacto) => {
        setApellidoContactoReferencia(Contacto.target.value);
    };
    const CelOnchangeHandler = (Contacto) => {
        setCelularContactoReferencia(Contacto.target.value);
    };
    const nombreConOnchangeHandler = (Contacto) => {
        setNombreContactoReferencia(Contacto.target.value);
    };

    const onPressBack = () =>{
        navigation.navigate("SpecificEvent", EvEnto);
    }

    const buttonOnsubmitHandler = (contactoooo) => {
        contactoooo.preventDefault();
        console.log("enviando...");
        console.log(nombre, apellidoContactoReferencia, nombreContactoReferencia, celularContactoReferencia);
        const nuevoEquipo = {
            nombre: nombre,
            nombreContactoReferencia: nombreContactoReferencia,
            apellidoContactoReferencia: apellidoContactoReferencia,
            celularContactoReferencia: celularContactoReferencia,
        };

        axios
            .post(baseURL, nuevoEquipo)
            .then(
                (response) => {
                    if (response.status === 200) {
                        console.log(response);
                        const idEquipo = response.data.ID;
                        axios
                            .post(baseURL2, {idEquipo, idEvento} )
                            .then(
                                (response) => {
                                    if (response.status === 200) {

                                        navigation.navigate("Home");
                                        console.log(response);
                                    }
                                },
                                (res) => {
                                    setError(res.response.data);
                                }
                            );

                        navigation.navigate("Home");
                        console.log(response);
                    }
                },
                (res) => {
                    setError(res.response.data);
                }
            );

        setNombre("");
        setCelularContactoReferencia(0);
        setApellidoContactoReferencia('');
        setNombreContactoReferencia('');

    };

    return (
        <View style={styles.container}>

            <View style={styles.fondoArriba}>
                <Image source={ArgTeamLogo} style={styles.imgStyle}></Image>

            </View>

            <Text onPress={onPressBack}>volverrrr</Text>
            <Text style={styles.tituloMain}>Nuevo Equipo</Text>
            <View style={styles.containerForm}>
                <TextInput
                    value={nombre}
                    setValue={setNombre}
                    placeholder="Nombre"
                    onChange={nombreOnchangeHandler}
                    style={styles.eachForm}
                />
                <TextInput
                    value={nombreContactoReferencia}
                    setValue={setNombreContactoReferencia}
                    placeholder="Nombre Contacto Referencia"
                    style={styles.eachForm}
                    onChange={nombreConOnchangeHandler}
                />
                <TextInput
                    value={apellidoContactoReferencia}
                    setValue={setApellidoContactoReferencia}
                    placeholder="Apellido Contacto Referencia"
                    style={styles.eachForm}
                    onChange={ApeOnchangeHandler}
                />
                <TextInput
                    value={celularContactoReferencia}
                    setValue={setCelularContactoReferencia}
                    style={styles.eachForm}
                    placeholder="Celular Contacto Referencia"
                    onChange={CelOnchangeHandler}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={buttonOnsubmitHandler}>
                <Text style={styles.textButton}>Guardar</Text>
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
    },
    fondoLogo: {
        width: "100%",
        backgroundColor: "#1A4B8E",
        alignItems: "center",
        flex: "center",
    },
    tituloMain: {
        backgroundColor: '#1A4B8E',
        color: 'white', marginLeft: 30, marginRight: 30,
        padding: 14, marginTop: 30,
        borderRadius: 15, fontSize: 15, fontWeight: '700', alignItems: "center",
        flex: "center",
    },

    nombrePag:
    {
        backgroundColor: '#1A4B8E',
        color: 'white', marginLeft: 30, marginRight: 30,
        padding: 20, marginTop: 10,
        borderRadius: 15, fontSize: 15, fontWeight: '700', alignItems: "center",
        flex: "center",
    },
    containerForm: {
        borderColor: '#6736CF',
        borderRadius: 15,
        borderWidth: 2,
        marginTop: 20,
        padding: 10,
        width: '70%',
    },
    eachForm: {
        borderColor: '#E742EB',
        borderRadius: 15,
        borderWidth: 2,
        paddingLeft: 10,
        padding: 5,
        margin: 5,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#E742EB', margin: 10, padding: 10, borderRadius: 15, width: '35%', alignContent: 'center', alignItems: 'center',
    },
    textButton: {
        color: 'white'

    },
    back: {
        width: 30,
        height: 20,
        position: 'absolute',
        marginLeft: 10,

    }, textArriba: {
        color: 'white',
        fontSize: 23, alignContent: 'center', width: '70%', marginLeft: '23%',
    },
    fondoArriba: {
        width: "100%",
        height: '10%',
        backgroundColor: "#1A4B8E",
        alignItems: "center",
        flexDirection: "row",

    },
    imgStyle: {
        marginTop: 30, alignContent: 'center',
        marginBottom: 20,
        resizeMode: "contain",
        width: '100%',
        height: 50,
    },
    textButton: {
        color: 'white'

    }
});

export default AgregarEquipo;
