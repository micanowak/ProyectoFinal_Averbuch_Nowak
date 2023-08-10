import React from "react";
import { StyleSheet, View, Image, useWindowDimensions,Text,Button } from "react-native";
import { Calendar } from 'react-native-calendars';
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import DataEventSmall from "../../components/DataEvent/DataEventSmall.js";

const NewEventsDate = () => {
    const { height } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <View style={styles.fondoLogo}> 
                <Image
                    source={ArgTeamLogo}
                    style={styles.imgStyle}
                />
            </View>
            <Text style={styles.nombreMes}>Agosto</Text>
            <View>
                <Calendar 
                    style={styles.calendar}
                    current={'2023-08-10'}
                    minDate={'2023-06-01'}
                    maxDate={'2024-01-01'}
                />
            </View>
            <View style = {styles.divDias}>
                <View style={styles.divDataEvent}>
                    <Text style={styles.titleCard}>Dia Inicio</Text>
                    <DataEventSmall ></DataEventSmall> 
                </View>
                <View style={styles.divDataEvent}>
                    <Text style={styles.titleCardFinal}>Dia Final</Text>
                    <DataEventSmall ></DataEventSmall> 
                </View>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfcfcf",
        flex: 1, // Cambiado a 1 para ocupar todo el espacio
    },calendar:{
        margin:15,borderRadius:15,paddingBottom:10,
    },
    
    divDias:{
        flexDirection:'column', flex:2,
        flex:  2, flexDirection:'row',
    },
    titleCard: {
        width:'80%',
        height:'40%',
        textAlign:'center',
        rowGap:1,
        fontWeight: 'bold',
        color: '#E742EB',
        fontSize:15,
        paddingTop:8, 
    },  
    titleCardFinal:{
        width:'80%',
        height:'40%',
        textAlign:'center',
        rowGap:1,
        fontWeight: 'bold',
        color: '#6736CF',
        fontSize:15,
        paddingTop:8, 
    },
    fondoLogo: {
        width: '100%',
        backgroundColor: '#1A4B8E',
        alignItems: "center",
        justifyContent: "center", // Cambiado de flex: "center"
    },
    imgStyle: {
        marginTop: 30,
        marginBottom: 20,
        resizeMode: "contain",
        width: 150,
        height: 50,
    },
    nombreMes:{
        backgroundColor:'#E742EB',
        color:'white',
        alignContent:'center',
        marginTop:30,
        paddingTop:5,
        marginHorizontal:'20%',
        borderRadius:15,
        fontSize:20,
        fontWeight:'700',
        alignItems: "center",
        textAlign:'center',
        height:'5%', width:'60%'
    },
    divDataEvent: {
        width:'40%',
        height:'20%',
        rowGap:2, marginTop:5, 
        alignItems: "center",
        maxHeight:'30%',
        marginLeft:25,
    },
});

export default NewEventsDate;
