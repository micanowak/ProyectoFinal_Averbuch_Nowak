import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
//import icon from '../../assets/simboloMayor.png';
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const CardEquipo = ({Equipo}) => {
    const navigation = useNavigation();
    const id = Equipo.ID;
    const [listaParticipantes, setListaParticipantes] = useState([]);
    console.log(Equipo.ID);
    const baseURL = "http://localhost:3000/getPerXEquipo/" + id;

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setListaParticipantes(response.data);
            console.log(listaParticipantes);
        });
    }, []);
    
    const AddPartiOnPressHandler = (e) => {
        console.log(Equipo);
        navigation.navigate("AgregarParticipanteEquipo", {id : id});
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.titleCard}>{Equipo.nombre}</Text>
            <View style={styles.divRef}>
                <Text style={styles.placeHolderTrucho}>Referente:</Text>
                <Text style={styles.textStyle}>{Equipo.nombreContactoReferencia}</Text>
                <Text style={styles.textStyle}>{Equipo.apellidoContactoReferencia}</Text>
            </View>
            <View style={styles.divPartic}>
            <Text style={styles.placeHolderTrucho}>Participantes:</Text>
            {listaParticipantes.map((element) => (<Text style={styles.textStyleParti}>{element.nombre}</Text> ))}
            </View>
            <TouchableOpacity style={styles.butonStyle} onPress={AddPartiOnPressHandler}>
                <Text style = {styles.masInfo}>Agregar Participante</Text>
            </TouchableOpacity>
        </View>
    );
};
/*            <Image source={require( '../../assets/simboloMayor.png')} style={styles.iconStyle} ></Image>
*/
const styles = StyleSheet.create({
    container: {
        borderColor: '#E741EB',
        borderBottomWidth:2,
        borderRightWidth:2,
        width:'80%',
        
        alignItems: 'center',
        borderRadius:15,
        marginTop:'5%', marginBottom:'5%',
        backgroundColor:'white',
    },divPartic:{
        display:'flex', 
        width: '100%'
    },placeHolderTrucho:{
        color:'gray',     width: '35%',
        marginLeft: '10%',
    },divRef:{
        width:'100%',
        display:'flex', flexWrap: 'wrap', flexDirection:'row'
    }, 
    butonStyle:{
        backgroundColor: '#E741EB',
        width:'100% ',
        height:30,
        textAlign: 'center',
        borderRadius:10, marginTop:10, 
    },
    masInfo:{
        color:'white', paddingTop:4,
    },
    iconStyle: {
        resizeMode: 'contain',
        width:10 ,
        height:15,
        alignItems:'right'
    },
    titleCard: {
        width:'100%',
        display:'flex', justifyContent:'center'
        ,
        rowGap:1,
        fontWeight: 'bold',
        color: '#1A4B8E',
        fontSize:20,
        padding:10,

    },
    textStyle:{
        height:'40%',
        width:'25%',
        color: '#1A4B8E',
        fontSize:12,
        paddingLeft:10, fontSize:'15px',

    },textStyleParti:{
        height:'40%',
        width:'30%', marginHorizontal:'35%', justifyContent:'center', textAlign:'center',
        color: '#1A4B8E',
        fontSize:12,
        paddingLeft:10, fontSize:'15px',
    }
});

export default CardEquipo;
