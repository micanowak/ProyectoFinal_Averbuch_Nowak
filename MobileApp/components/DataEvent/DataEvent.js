import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DataEvent = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleCard}>Dia Inicio</Text>
            <Text style={styles.textStyle}>23/06/23</Text>
            <Text style={styles.textStyle}>de 15 a 18 hs</Text>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        borderColor:'gray',
        borderWidth:2,
        width:'20%',
        height:'10%',
        borderRadius:15,
        marginLeft:'20%',
    },
    titleCard: {
        width:'80%',
        height:'50%',
        textAlign:'center',
        rowGap:1,
        fontWeight: 'bold',
        color: '#E742EB',
        fontSize:15,
        padding:10,

    },
    textStyle:{
        height:'25%',
        width:'80%',
        color: '#1A4B8E',
        fontSize:8,
        padding:4,
    },
});


export default DataEvent;