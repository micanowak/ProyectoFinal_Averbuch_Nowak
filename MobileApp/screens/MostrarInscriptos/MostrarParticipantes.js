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
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import back from "../../assets/images/backArrow.png"
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";

const MostrarParticipantes = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const [listaParticipantes, setListaParticipantes] = useState([]);
    const { idEvento, EvEnto } = route.params;
    const baseURL = "http://localhost:3000/getPartiByIdEvento/" + idEvento;

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setListaParticipantes(response.data);
            console.log(listaParticipantes);
        });
    }, []);

    const onPressBack = () => {
        navigation.navigate("SpecificEvent", {EvEnto: EvEnto});
    }

    return (
        <View style={styles.container}>
            <View style={styles.fondoLogo}>
                <Image
                    source={ArgTeamLogo}
                    style={styles.imgStyle}
                />
            </View>
            <>
                <Text style={styles.nombreEvento}>Participantes</Text>

                {listaParticipantes.map((element) => (
                    (<Text style = {styles.nomParti} >{element.nombre}</Text>) 
                ) )}                
                <Text  style={styles.volver}  onPress={onPressBack}>Volver!</Text>

            </>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfcfcf",
        alignItems: "center",
        width:'100%', height:'100%'
    },nombreEvento: {
        backgroundColor: '#1a4b8e',
        color: 'white', marginLeft: 30, marginRight: 30,
        padding: 20, marginTop: 10,
        borderRadius: 15, fontSize: 15, fontWeight: '700', alignItems: "center",
        flex: "center",
    },nomParti:{
        color:'#1A4B8E', fontSize:'16', fontWeight:'bold', margin:10
    },
    fondoLogo: {
        width: '100%',
        backgroundColor: '#1A4B8E',
        alignItems: "center",
        flex: "center",
    },volver:{
        color:'#1a4b8e', textAlign:'center', margin:5,
    },
    buttonStyle: {
        width: '35%',
        height: '4%',
        backgroundColor: 'rgb(26, 75, 142)',
        color: '#1A4B8E',
        padding: 10,
        textAlign: "center",
        marginTop: 50,
        borderRadius: 5,
        flex: "contain", margin: '20%',
    },
    imgStyle: {
        marginTop: 30,
        marginBottom: 20,
        resizeMode: "contain",
        width: 150,
        height: 50,
    },

});

export default MostrarParticipantes;
