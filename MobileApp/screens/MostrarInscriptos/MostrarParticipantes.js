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
                <Text onPress={onPressBack}>volverrrr</Text>
                {listaParticipantes.map((element) => (<Text>{element.nombre}</Text>))}
            </>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfcfcf",
        alignItems: "center",
        justifyContent: "center",
    },
    fondoLogo: {
        width: '100%',
        backgroundColor: '#1A4B8E',
        alignItems: "center",
        flex: "center",
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
