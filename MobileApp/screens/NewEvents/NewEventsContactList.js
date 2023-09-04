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
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png"
import { useNavigation } from "@react-navigation/native";
import axios from "axios";


const NewEventsContactList = () =>{


    return(
        <View style={styles.container}>
            
                <Image source={ArgTeamLogo} style={styles.imgStyle}></Image>
            <Text>hola</Text>
            <TouchableOpacity>submit</TouchableOpacity>
            
            
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
});

export default NewEventsContactList;