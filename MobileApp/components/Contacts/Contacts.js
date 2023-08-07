import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import phoneIcon from "../../assets/images/phoneIcon.png";
import mailIcon from "../../assets/images/mailIcon.png";
const DataEvent = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleCard}>María Sanchez</Text>
            <Image source={phoneIcon} style={styles.imgStyle}></Image> <Image source={mailIcon} style={styles.imgStyle}></Image>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        borderRightColor:'#1A4B8E',
        borderRightWidth:3,
        flexDirection: 'row',
        width:'40%',
        height:'7%',
        borderRadius:15,
        margin:10,flex:'center',alignItems:'center'
    },
    titleCard: {
        width:'80%',
        height:'40%',
        
        textAlign:'center',
        rowGap:1,
        fontWeight: 'bold',
        color: '#1A4B8E',
        fontSize:12,
        paddingTop:8
    },
    textStyle:{
        height:'25%',
        width:'80%',
        color: '#1A4B8E',
        fontSize:13,
        padding:4,
    },
    imgStyle: {
        resizeMode: "contain",
        width: '50%',
        height:'50%',
        alignItems:'left', flex:'left'
    },
});


export default DataEvent;