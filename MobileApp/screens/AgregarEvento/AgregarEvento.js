import React, { useState } from "react";
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
import DataEvent from "../../components/DataEvent/DataEvent.js";
import { useNavigation } from '@react-navigation/native';


const AgregarEvento = () => {
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState('');
    const [lugar, setLugar] = useState('');
    const [fechaFin, setFechaFin] = useState(new Date());
    const [dat, setDate] = useState(new Date());
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [descripcion, setDescripcion] = useState('');

    const nombreOnchangeHandler = evento => {
        setNombre(evento.target.value)
    }
    const lugarOnchangeHandler = evento => {
        setLugar(evento.target.value)
    }
    const fechaFinOnchangeHandler = evento => {
        setFechaFin(evento.target.value)
    }
    const fechaInicioOnchangeHandler = evento => {
        setFechaInicio(evento.target.value)
    }
    const descripcionOnchangeHandler = evento => {
        setDescripcion(evento.target.value)
    }

    const datehandler = (datee) => {
        setDate(datee);
    }

    const buttonOnsubmitHandler = evento => {
        evento.preventDefault();
        console.log('enviando...')
        const nuevoEvento = {
            nombre: nombre,
            lugar: lugar,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            descripcion: descripcion,
        }


        sendEvento(nuevoEvento);

        setDescripcion('');
        setNombre('');
        setFechaInicio(new Date());
        setFechaFin(new Date());
        setLugar('');
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.fondoLogo}> <Image
                source={ArgTeamLogo}
                style={styles.imgStyle}
            ></Image></View>
            <Text>Agregar Evento</Text>
            <TextInput
                value={nombre}
                setValue={setNombre}
                placeholder="Nombre del evento"
                onChange={nombreOnchangeHandler}
            />
            <TextInput
                value={lugar}
                setValue={setLugar}
                placeholder="Lugar"
                onChange={lugarOnchangeHandler}
            />
            <TextInput
                value={descripcion}
                setValue={setDescripcion}
                placeholder="Descrpción"
                onChange={descripcionOnchangeHandler}
            />
            <TextInput
                value={fechaInicio}
                setValue={setFechaInicio}
                placeholder="Fecha Inicio"
                onChange={fechaInicioOnchangeHandler}
            />
            <TextInput
                value={fechaFin}
                setValue={setFechaFin}
                placeholder="Nombre del evento"
                onChange={fechaFinOnchangeHandler}
            />
            <TouchableOpacity onPress={buttonOnsubmitHandler}>
                <Text>Submit</Text>
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
    fondoLogo:{
        width:'100%',
        backgroundColor:'#1A4B8E',
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
});

export default AgregarEvento;