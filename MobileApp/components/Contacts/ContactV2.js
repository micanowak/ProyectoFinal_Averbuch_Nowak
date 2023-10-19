import react, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import phoneIcon from "../../assets/images/phoneIcon.png";
import mailIcon from "../../assets/images/mailIcon.png";
import { ScrollView } from 'react-native';
import axios from "axios";


const ContactV2 = ({idContacto}) => {

    const baseURL = "http://localhost:3000/getContactById/" + idContacto;
    const [Contacto, setContacto] = useState({});

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setContacto(response.data);
                console.log(Contacto);
            })
            .catch((error) => {
                console.error("Error fetching contact data:", error);
            });
    }, []);

    const onClickDelete = () => {
        console.log(2)

    }

    const onClickMoreInfo = () => {
        console.log(2)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleCard}>{Contacto.nombre} {Contacto.apellido}</Text>
            {/*<View style = {styles.containerPics}>
                <Image source={phoneIcon} style={styles.imgStyle}></Image> 
                <Image source={mailIcon} style={styles.imgStyle}></Image>
            </View>*/}
            <View style = {styles.buttonRow}>
                <TouchableOpacity style={[styles.button, {width:'60%'}]} onClick = {onClickDelete}><Text style = {styles.buttonTextP}>Eliminar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onClick = {onClickMoreInfo}><Text style = {styles.buttonTextM}>Más info</Text></TouchableOpacity>
            </View>              
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        borderRightColor:'#1A4B8E',
        borderRightWidth:3,
        //flexDirection: 'row',
        flex:6,
        width:'90%',
        height:'80%',
        borderRadius:15,
        margin:5,flex:'center',alignItems:'center',flex: 1,
        justifyContent: 'center', 
    },
    buttonRow: {
        flexDirection: 'row', width:'90%'
    },
    buttonTextP:{
        color:'#E742EB', //FUCSIA
    },buttonTextM:{
        color:'#845FD3', //VIOLETA
    },button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 5,
        width:'45%'
    },
    titleCard: {
        width:'45%',
        height:'30%',
        marginLeft:10,
        textAlign:'left',
        rowGap:3,
        fontWeight: 'bold',
        color: '#1A4B8E',
        fontSize:16,
        flexDirection: 'row',
        marginBottom:8,
    },
    
});


export default ContactV2;