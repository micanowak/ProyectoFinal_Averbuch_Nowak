import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import phoneIcon from "../../assets/images/phoneIcon.png";
import mailIcon from "../../assets/images/mailIcon.png";
const Contact = ({Contacto}) => {
    console.log(Contacto);

    return(
        <View style={styles.container}>
            <Text style={styles.titleCard}>MJ{/*{Contacto.nombre} {Contacto.apellido}*/}</Text>
            <View style = {styles.containerPics}>
                <Image source={phoneIcon} style={styles.imgStyle}></Image> 
                <Image source={mailIcon} style={styles.imgStyle}></Image>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        borderRightColor:'#1A4B8E',
        borderRightWidth:3,
        flexDirection: 'row',
        width:'32%',
        height:'80%',
        borderRadius:15,
        margin:10,flex:'center',alignItems:'center',flex: 1,
        justifyContent: 'center', 
    },
    titleCard: {
        width:'90%',
        height:'80%',
        marginLeft:15,
        textAlign:'center',
        rowGap:1,
        fontWeight: 'bold',
        color: '#1A4B8E',
        fontSize:12,
        
    },
    containerPics:{
        width: '50%', height:'90%',marginBottom:15,alignItems:'center',flexDirection: 'column', marginTop:10,
    },
    textStyle:{
        height:'25%', 
        width:'80%',
        color: '#1A4B8E',
        fontSize:18,
        padding:4,flexDirection:'row',flex:1 ,alignContent:'center',alignItems:'center',
    },
    imgStyle: {
        width: '40%', marginTop:5,
        height:'40%',
    }
});


export default Contact;