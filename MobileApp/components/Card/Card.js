import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";
//import icon from '../../assets/simboloMayor.png';

const Card = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleCard}>Nombre del evento</Text>
            <Text style={styles.textStyle}>23/06/23</Text>
            <Text style={styles.textStyle}>de 15 a 18 hs</Text>

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
        height:'20%',
       // alignItems: 'center',
        borderRadius:15,
        marginTop:20,
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
