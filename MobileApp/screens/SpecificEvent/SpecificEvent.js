import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    useWindowDimensions,
    Button,
    TouchableOpacity
} from "react-native";
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import DataEvent from "../../components/DataEvent/DataEvent.js";
import Contacts from "../../components/Contacts/Contacts.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const SpecificEvent = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const route = useRoute();
    const onpressVolver = () => {
        navigation.navigate("Home");
    };
    const [listaContactos, setListaContactos] = useState([]);
    const { EvEnto } = route.params;

    if (!EvEnto) {
        return (
            <View style={styles.container}>
                <Text onPress={onpressVolver}> Volver!</Text>
                <Text>Error: Evento is undefined</Text>
            </View>
        );
    }

    console.log(EvEnto);

    const idEvento = EvEnto.ID || null;

    const baseURL = "http://localhost:3000/getProfByEvent/" + idEvento;

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setListaContactos(response.data);
                } else {
                    console.error("La respuesta no es un array:", response.data);
                }
            })
            .catch((error) => {
                console.error("Error al obtener los contactos:", error);
            });
    }, []);

    const buttonOnAddPartiHandler = () => {
        navigation.navigate("AgregarParticipanteLibre", { idEvento, EvEnto });
    }
    const buttonOnAddTeamHandler = () => {
        navigation.navigate("AgregarEquipo", { idEvento, EvEnto });
    }
    const buttonOnMostrarEquiHandler = () => {
        navigation.navigate("MostrarEquipos", { idEvento, EvEnto });
    }
    const buttonOnMostrarPartiHandler = () => {
        navigation.navigate("MostrarParticipantes", { idEvento, EvEnto });
    }
    const buttonOnAgregarContactHandler = () => {
        navigation.navigate("NewContact", { idEvento: EvEnto.ID, EvEnto:EvEnto });
    }

    return (
        <View style={styles.container}>
            <Text onPress={onpressVolver}> Volver!</Text>
            <View style={styles.fondoLogo}>
                <Image source={ArgTeamLogo} style={styles.imgStyle}></Image>
            </View>
            <Text style={styles.nombreEvento}>{EvEnto.nombre}</Text>
            <Text style={styles.desc}>{EvEnto.descripcion || ""}</Text>
            <View style={styles.divDataEvent}>
                <View style={styles.containerCadaFecha}>
                    <Text style={styles.titleCard}>Fecha Inicio</Text>
                    <Text style={styles.textStyle}>{EvEnto.fechaInicio || ""}</Text>
                </View>
                <View style={styles.containerCadaFecha}>
                    <Text style={styles.titleCardFinal}> Fecha Final</Text>
                    <Text style={styles.textStyle}>{EvEnto.fechaFin || ""}</Text>
                </View>
            </View>
            <Text style={styles.tituloContactos}>Contactos</Text>
            <View style={styles.contactos}>
                {listaContactos.map((element) => (
                    <Contacts Contacto={element} />
                ))}
            </View>
            <View style={styles.contactos}>
                {EvEnto.hayParticipantesLibres === true ? (
                    <View>
                        <TouchableOpacity style={styles.button} onPress={buttonOnAddPartiHandler}>
                            <Text style={styles.textButton}>Agregar Participante</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={buttonOnMostrarPartiHandler}>
                            <Text style={styles.textButton}>Mostrar Participantes</Text>
                        </TouchableOpacity>
                    </View>

                ) : (
                    <View>
                        <TouchableOpacity style={styles.button} onPress={buttonOnAddTeamHandler}>
                            <Text style={styles.textButton}>Agregar Equipo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={buttonOnMostrarEquiHandler}>
                            <Text style={styles.textButton}>Mostrar Equipos</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <TouchableOpacity style={styles.button} onPress={buttonOnAgregarContactHandler}>
                    <Text style={styles.textButton}>Agregar Contacto</Text>
                </TouchableOpacity>
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
        backgroundColor: 'white',
        borderColor: '#1A4B8E',
        borderWidth: 1,
        width: '50%',
        height: '30%',
        borderRadius: 15,
        margin: 3, flex: 'center', alignItems: 'center'
    },
    titleCardFinal: {
        width: '80%',
        height: '15%',
        textAlign: 'center',
        rowGap: 1,
        fontWeight: 'bold',
        color: '#6736CF',
        fontSize: 15,
        paddingTop: 8,
    },
    tituloContactos: {
        color: '#1A4B8E', fontWeight: '500', fontSize: 16, textAlign: 'left', margin: 5
    },
    titleCard: {
        width: '80%',
        height: '15%',
        textAlign: 'center',
        rowGap: 1,
        fontWeight: 'bold',
        color: '#E742EB',
        fontSize: 15,
        paddingTop: 8,
    },
    contactos: {
        width: '100%',
        flexDirection: "row", alignItems: "center",
        flex: 1, justifyContent: 'flex-start', maxHeight: '10%'    //IMPORTanteeeeee  

    },
    divDataEvent: {
        width: '100%',
        height: '20%',
        rowGap: 1, marginTop: 5, padding: 0,
        alignItems: "center",
        flex: 1, flexDirection: 'column', maxHeight: '30%'
    },
    dataEvent: {
        width: '50%',
        height: '50%',
    },
    fondoLogo: {
        width: '100%',
        backgroundColor: '#1A4B8E',
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
    button: {
        backgroundColor: '#E742EB', margin: 10, padding: 10, borderRadius: 15, width: '35%', alignContent: 'center', alignItems: 'center',
    },
    textButton: {
        color: 'white'

    },
    nombreEvento: {
        backgroundColor: '#1A4B8E',
        color: 'white', marginLeft: 30, marginRight: 30,
        padding: 20, marginTop: 10,
        borderRadius: 15, fontSize: 15, fontWeight: '700', alignItems: "center",
        flex: "center",
    },
    desc: {
        width: '80%',
        maxHeight: '15%',
        textAlign: 'left',
        rowGap: 1,
        color: '#1A4B8E',
        fontSize: 15,
        padding: 10, margin: 10

    },

    textStyle: {
        height: '25%',
        width: '80%',
        color: '#1A4B8E',
        fontSize: 13,
        padding: 12,
        marginTop: 10
    },

});

export default SpecificEvent;