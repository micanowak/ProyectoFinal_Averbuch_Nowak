import React from 'react';
import { useState } from 'react';
import {StyleSheet, View, TextInput, Text, Button} from 'react-native';

const CustomButton = (usuarioEnv, passwordEnv, verificarUsuario) => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const buttonOnsubmitHandler = (e) => {
        setPassword(passwordEnv);
        setUsuario(usuarioEnv);
        const agregar = {
            nombre: usuario,
            contrasenia: password, 
        }

        verificarUsuario(agregar);

    } 
    
    return (
        <View style = {styles.container}>
           <Button style = {styles.text} onPress={buttonOnsubmitHandler}>Iniciar Sesión</Button>
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
export default CustomButton;