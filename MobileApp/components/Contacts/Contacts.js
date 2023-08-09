import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import phoneIcon from "../../assets/images/phoneIcon.png";
import mailIcon from "../../assets/images/mailIcon.png";
const DataEvent = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleCard}>María Sanchez</Text>
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
        height:'30%',
        borderRadius:15,
        margin:10,flex:'center',alignItems:'center',flexDirection:'row', flex: 1,
        justifyContent: 'center'
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
        textAlign: 'center',
    },
    containerPics:{
        width: '50%', height:'60%',marginBottom:15,alignItems:'flex-start',
    },
    textStyle:{
        height:'25%',
        width:'80%',
        color: '#1A4B8E',
        fontSize:18,
        padding:4,
    },
    imgStyle: {
        resizeMode: "contain",
        width: '70%',
        height:'70%',
        alignItems:'left', flex:'left'
    },
});


export default DataEvent;