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
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";


const NewEventsContact = () =>{
    const baseURL = "http://localhost:3000/NewEventsContact";
/*const navigation = useNavigation();
const { height } = useWindowDimensions();
const [descripcion, setDescripcion] = useState("");

const descripcionOnchangeHandler = (evento) => {
    setDescripcion(evento.target.value);
};*/
    return(
        <View style={styles.container}>
            <View style={styles.fondoLogo}>
                {" "}
                <Image source={ArgTeamLogo} style={styles.imgStyle}></Image>
            </View>
            <Text style ={styles.tituloMain}>Descripcion</Text>
            <View style = {styles.containerForm}>
                <Text /*value={descripcion}
                    setValue={setDescripcion}
                    placeholder="Descrpción"
                    style={styles.eachForm}
                    onChange={descripcionOnchangeHandler}*/>Descripcion</Text>
                    
                
            </View>
            <TouchableOpacity style = {styles.button} onPress={buttonOnsubmitHandler}>
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
    tituloMain:{
        backgroundColor:'#1A4B8E',
        color:'white',marginLeft:30,marginRight:30,
        padding:14,marginTop:30,
        borderRadius:15,fontSize:15,fontWeight:'700',alignItems: "center",
        flex: "center", 
    },
    imgStyle: {
        marginTop: 30,
        marginBottom: 20,
        resizeMode: "contain",
        width: 150,
        height: 50,
    },
    nombrePag:
    {
        backgroundColor:'#1A4B8E',
        color:'white',marginLeft:30,marginRight:30,
        padding:20,marginTop:10,
        borderRadius:15,fontSize:15,fontWeight:'700',alignItems: "center",
        flex: "center", 
    },
    containerForm:{
        borderColor:'#6736CF',
        borderRadius:15,
        borderWidth:2,
        marginTop:20,
        padding:10,
        width:'70%',
    },
    eachForm:{
        borderColor:'#E742EB',
        borderRadius:15,
        borderWidth:2,
        paddingLeft:10,
        padding:5,
        margin:5,
        marginBottom:20,
    },
    button:{
        backgroundColor:'#E742EB', margin:10,padding:10,borderRadius:15, width:'35%',alignContent:'center',alignItems:'center',
    },
    textButton:{
        color:'white'
        
    }
});

export default NewEventsContact;
