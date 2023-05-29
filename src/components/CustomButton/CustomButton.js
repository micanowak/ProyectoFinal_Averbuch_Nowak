import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import CustomButton from '.';

const CustomInputBottom = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style = {styles.container}>
           <Text style = {styles.text}>Button</Text>
        </View>
    );
};

//minuto 25:13 del video

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E741EB',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text : {
        fontWeight: 'bold',
        color: 'white',
    }
});
export default CustomButton