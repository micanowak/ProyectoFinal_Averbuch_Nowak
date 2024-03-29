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
import ContactV2 from "../../components/Contacts/ContactV2.js"
import Search from "../../components/Search/Search.js"

const NewEventsContactList = () => {
    const baseURL = "http://localhost:3000/AgregarEvento";
    const baseURL2 = "http://localhost:3000/getIdEvent";
    const navigation = useNavigation();
    const route = useRoute();
    const [eventoNuevo, setEventoNuevo] = useState({});
    const [idEvent, setIdEvent] = useState(0);
    const [listaContactosSeleccionados, setListaContactosSeleccionados] = useState([]);
    //const nombre = " d ";

    const { nombre, lugar, fechaInicio, fechaFin, descripcion, hospedaje, gastronomia, edicion, sponsors, hayParticipantesLibres } = route.params;

    useEffect(() => {

        const NewEventtt = {
            nombre: nombre,
            lugar: lugar,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            descripcion: descripcion,
            hospedaje: hospedaje,
            gastronomia: gastronomia,
            numEdicionEvento: edicion,
            sponsors: sponsors,
            hayParticipantesLibres: hayParticipantesLibres
        }

        setEventoNuevo(NewEventtt);

        axios
            .post(baseURL, NewEventtt)
            .then(
                (response) => {
                    if (response.status === 200) {
                        setIdEvent(response.data.ID);
                    }
                },
                (res) => {
                    setError(res.response.data);
                }
            );
    }, []);

    const buttonOnPressHandler = () => {
        navigation.navigate("Home");
    }
    const onPressBack = () => {
        evento.preventDefault();
        navigation.navigate(backPage);

    }

    const listaHandle = (lista) => {
        setListaContactosSeleccionados(lista);
    }

    return (
        <View style={styles.container}>
            <View style={styles.fondoArriba}>
            
                <Text style={styles.textArriba} >Seleccionar Contactos</Text>
            </View>
            <Search style={styles.search} listaContactosSeleccionados={listaHandle}></Search>
            <Text style={styles.tituloContactos}>Contactos seleccionados</Text>
            <View style={styles.contactos} >

                {listaContactosSeleccionados.map((element) => <ContactV2 idContacto={element} idEvento={idEvent} />)}
            </View>
            <TouchableOpacity style={styles.mainButton} onPress={buttonOnPressHandler}>
                <Text style={styles.textButton}>Guardar</Text>
            </TouchableOpacity>
            {/* HAY QUE HACER UN CARTEL QUE AVISE QUE PARA AGREGAR NUEVOS CONTACTOS SE HACE DESDE SPECIFIC EVENT */}
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
        width: '80%', flex: 2,
        flexDirection: "column", alignItems: "center",
        flex: 1, justifyContent: 'flex-start', maxHeight: '25%'    //IMPORTanteeeeee  

    }, mainButton: {
        backgroundColor: 'rgb(231, 66, 235);', marginTop: 60, padding: 10, borderRadius: 15, width: '50%', height: '5%', alignContent: 'center', alignItems: 'center',
    }, button: {
        backgroundColor: 'rgb(26, 75, 142)', marginTop: 60, padding: 10, borderRadius: 15, width: '40%', height: '5%', alignContent: 'center', alignItems: 'center',
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
        color: 'white', marginHorizontal: '15%',
        fontSize: 23, textAlign: 'center', width: '70%',
    },
    plus: {
        fontSize: 25, color: '#845FD3', borderColor: '#845FD3' //fucsia
        , borderWidth: 2, borderRadius: 20, paddingBottom: 4, paddingRight: 8, paddingLeft: 8
    }, search: {
        backgroundColor: 'blue', margin: 10,
    },
});

export default NewEventsContactList;

/* axios
                            .get(baseURL2, {
                                nombre: nombre,
                                lugar: lugar,
                                fechaInicio: fechaInicio,
                                fechaFin: fechaFin,
                                descripcion: descripcion,
                                hospedaje: hospedaje,
                                gastronomia: gastronomia,
                                numEdicionEvento: edicion,
                                sponsors: sponsors
                            })
                            .then((response) => {
                                setIdEvent(response.data);
                                console.log("id: ", response);
                            })
                            .catch((error) => {
                                console.error("Error fetching contact data:", error);
                            }); */