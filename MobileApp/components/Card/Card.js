import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
//import icon from '../../assets/simboloMayor.png';
import { useNavigation } from '@react-navigation/native';

const Card = ({evento}) => {
    const navigation = useNavigation();
    
    const masInfoOnPressHandler = (e) => {
        console.log(evento);
        navigation.navigate("SpecificEvent", {EvEnto: evento});
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.titleCard}>{evento.nombre}</Text>
            <Text style={styles.textStyle}>{evento.fechaInicio}</Text>
            <Text style={styles.textStyle}>{evento.fechaFin}</Text>
            <Text style={styles.textStyle}>{evento.lugar}</Text>
            <TouchableOpacity style={styles.butonStyle} onPress={masInfoOnPressHandler}>
                <Text style = {styles.masInfo}>Más info</Text>
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
        height:'15%',
       // alignItems: 'center',
        borderRadius:15,
        marginTop:20,
        backgroundColor:'white',
    },
    butonStyle:{
        backgroundColor: '#E741EB',
        width:'100% ',
        height:30,
        textAlign: 'center',
        borderRadius:10
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
        width:'90%',
        height:'50%',
        textAlign:'left',
        rowGap:1,
        fontWeight: 'bold',
        color: '#1A4B8E',
        fontSize:20,
        padding:10,

    },
    textStyle:{
        height:'25%',
        width:'50%',
        color: '#1A4B8E',
        fontSize:12,
        paddingLeft:10,

    },
});

export default Card;
