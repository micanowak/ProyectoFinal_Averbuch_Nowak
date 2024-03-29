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
//import DatePicker from "react-native-datepicker"
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import SelectDropdown from 'react-native-select-dropdown';

const NewEventsInfo = () => {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const [edicion, setEdicion] = useState();
    const [nombre, setNombre] = useState("");
    const [sponsors, setSponsors] = useState("");
    const [lugar, setLugar] = useState("");
    const [gastronomia, setGastronomia] = useState('');
    const [hospedaje, setHospedaje] = useState('');
    const [descripcion, setDescripcion] = useState("");
    const [hayParticipantesLibres, setHayParticipantesLibres] = useState();
    const route = useRoute();
    const selectOptions = [
        { label: 'Equipos', value: 0 },
        { label: 'Participantes Libres', value: 1 },
    ];

    //const {fechaInicio, fechaFin} = route.params;
    const fechaInicio = new Date();
    const fechaFin = new Date();

    const nombreOnchangeHandler = (evento) => {
        setNombre(evento.target.value);
    };
    const lugarOnchangeHandler = (evento) => {
        setLugar(evento.target.value);
    };
    const sponsorsOnchangeHandler = (evento) => {
        setSponsors(evento.target.value);
    };
    const hospedajeOnchangeHandler = (evento) => {
        setHospedaje(evento.target.value);
    };
    const descripcionOnchangeHandler = (evento) => {
        setDescripcion(evento.target.value);
    };
    const edicionOnchangeHandler = (evento) => {
        setEdicion(evento.target.value);
    };
    const gastroOnchangeHandler = (evento) => {
        setGastronomia(evento.target.value);
    };
    const equipoOnchangeHandler = (evento) => {
        setHayParticipantesLibres(evento.target.value);
    };


    const onPressBack = () => {
        evento.preventDefault();
        setDescripcion("");
        setNombre("");
        setEdicion(0);
        setGastronomia('');
        setSponsors('');
        setHospedaje("");
        setLugar("");
        setEsPorEquipo();

        navigation.navigate("NewEventsDate");

    }
    const buttonOnsubmitHandler = (evento) => {
        evento.preventDefault();
        console.log("enviando...");
        const nuevoEvento = {
            nombre: nombre,
            lugar: lugar,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            descripcion: descripcion,
            hospedaje: hospedaje,
            gastronomia: gastronomia,
            numEdicionEvento: edicion,
            sponsors: sponsors,
            hayParticipantesLibres: hayParticipantesLibres,
        };



        navigation.navigate("NewEventsContactList", nuevoEvento);


        setDescripcion("");
        setNombre("");
        setEdicion(0);
        setGastronomia('');
        setSponsors('');
        setHospedaje("");
        setLugar("");
        setHayParticipantesLibres();
    };

    return (
        <View style={styles.container}>

            <View style={styles.fondoArriba}>
                
                <Image source={ArgTeamLogo} style={styles.imgStyle}></Image>
            </View>


            <Text style={styles.tituloMain}>Ingreso de características</Text>
            <View style={styles.containerForm}>
                <TextInput
                    value={nombre}
                    placeholderTextColor={styles.placeholderStyle.color}
                    setValue={setNombre}
                    placeholder="Nombre del evento"
                    onChange={nombreOnchangeHandler}
                    style={styles.eachForm}
                />
                <TextInput
                    value={descripcion}
                    setValue={setDescripcion}
                    placeholder="Descrpción"
                    placeholderTextColor={styles.placeholderStyle.color}
                    style={styles.eachForm}
                    onChange={descripcionOnchangeHandler}
                />
                <TextInput
                    value={lugar}
                    placeholderTextColor={styles.placeholderStyle.color}
                    setValue={setLugar}
                    placeholder="Lugar"
                    style={styles.eachForm}
                    onChange={lugarOnchangeHandler}
                />
                <TextInput
                    value={hospedaje}
                    setValue={setHospedaje}
                    placeholderTextColor={styles.placeholderStyle.color}
                    style={styles.eachForm}
                    placeholder="Hospedaje"
                    onChange={hospedajeOnchangeHandler}
                />
                <TextInput
                    value={gastronomia}
                    setValue={setGastronomia}
                    placeholderTextColor={styles.placeholderStyle.color}
                    style={styles.eachForm}
                    placeholder="Gastronomía"
                    onChange={gastroOnchangeHandler}
                />
                <TextInput
                    value={sponsors}
                    setValue={setSponsors}
                    style={styles.eachForm}
                    placeholderTextColor={styles.placeholderStyle.color}
                    placeholder="Sponsors"
                    onChange={sponsorsOnchangeHandler}
                />
                <TextInput
                    value={edicion}
                    setValue={setEdicion}
                    placeholder="Número de Edición"
                    placeholderTextColor={styles.placeholderStyle.color}
                    style={styles.eachForm}
                    onChange={edicionOnchangeHandler}
                />
                <SelectDropdown
                    data={selectOptions}
                    buttonStyle={styles.dropdown}
                    buttonTextStyle={styles.textDropdown}
                    rowStyle={styles.rowDropdown}
                    onSelect={(selectedItem, index) => {
                        setHayParticipantesLibres(selectedItem.value);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.label;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.label;
                    }}
                    defaultButtonText="Selecciona una opción "
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={buttonOnsubmitHandler}>
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
        fontWeight: 600,

    }, placeholderStyle: {
        color: '#1a4b8e',
        fontWeight: 300
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
    },
    dropdown:{
        backgroundColor: 'transparent',
        borderColor: '#E742EB',
        borderRadius: 15,
        borderWidth: 2,
        paddingLeft: 10,
        padding: 5,
        marginRight: 5,
        marginBottom: 20,
        width:'100%',
        height:'auto'
    },
    textDropdown:{
        color:'#1a4b8e',
        fontSize:'14px',
        fontWeight: 600,
        textAlign: 'justify'
    },
    
});

export default NewEventsInfo;
