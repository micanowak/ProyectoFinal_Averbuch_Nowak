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
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import back from "../../assets/images/backArrow.png"
import CardEquipo from "../../components/Card/CardEquipo";

const MostrarEquipos = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { height } = useWindowDimensions();
    const [listaEquipos, setListaEquipos] = useState([]);
    const { idEvento, EvEnto } = route.params;
    console.log(idEvento, EvEnto);
    const baseURL = "http://localhost:3000/getTeamByIdEvento/" + idEvento;

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setListaEquipos(response.data);
            console.log(listaEquipos);
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
                {listaEquipos.map((element) => (<CardEquipo Equipo = {element}/>))}
                <Text style={styles.volver} onPress={onPressBack}>Volver!</Text>
</>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfcfcf",
        alignItems: "center",
        width:'100%', height:'100%'
    },volver:{
        color:'#1a4b8e', textAlign:'center', margin:5,
    },
    fondoLogo: {
        width: '100%',
        backgroundColor: '#1A4B8E',
        alignItems: "center",
        flex: "center",
        height:'10%',
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
        marginTop: '5%',
        marginBottom: '5%',
        resizeMode: "contain",
        width: 150,
        height: 50,
    },

});

export default MostrarEquipos;
