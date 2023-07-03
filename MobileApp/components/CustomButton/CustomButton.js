import React from 'react';
import { useState } from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';

const CustomButton = () => {
    /*const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const buttonOnsubmitHandler = (e) => {
        setPassword(passwordEnv);
        setUsuario(usuarioEnv);
        const agregar = {
            nombre: usuario,
            contrasenia: password, 
        }

        verificarUsuario(agregar);

    } */
    
    return (
        <TouchableOpacity>
            <View style = {styles.button}>
                <Text style = {styles.text}>
                    submit
                </Text>
            </View>
        </TouchableOpacity>
    );
};
/* <View style = {styles.container}>
            <Text> Button </Text>
            <Button title='Iniciar Sesión' style = {styles.text} onPress={buttonOnsubmitHandler}></Button>
        </View>*/

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
        fontSize:20
    },
    button: {
        backgroundColor: "#E741EB",
        padding: 15,
        alignItems:"center",
        width:"50%"
    }
});
export default CustomButton;