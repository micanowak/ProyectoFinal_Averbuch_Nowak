import React, { useState } from 'react';
import {StyleSheet, View, Text, Image, useWindowDimensions } from 'react-native';
/*import ArgTeamLogo from '../../../assets/images/ArgTeamLogo.png';
import logoFirex from '../../../assets/images/LogoFirex.png';*/
import CustomInputTop from '../../components/CustomInputTop/CustomInputTop'; 
import CustomInputBottom from '../../components/CustomInputBottom/CustomInputBottom'; 
import CustomButton  from '../../components/CustomButton/CustomButton';




const LogInScreen = (sendUsername, sendPassword) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const inicioSesion = (usuario) => {
        sendUsername(usuario.nombre);
        sendPassword(usuario.contrasenia);
    }

    return (
        <View style={styles.root}>
            

            <CustomInputTop 
                value={username} 
                setValue={setUsername} 
                esTop={true} 
                placeholder="Usuario"
                secureTextEntry={false}
            />
            <CustomInputBottom 
                value={password} 
                setValue={setPassword} 
                esTop={false} 
                placeholder="Contraseña"
                secureTextEntry={true}
            />

            <CustomButton usuarioEnv={username} passwordEnv={password} verificarUsuario={inicioSesion}/>
        </View>
    );
};

/*

<Image 
                source={logoFirex}
                style={[styles.logoFirexStyle]} 
                resizeMode="contain"
            />
            <Image 
                source={ArgTeamLogo}
                style={[styles.argTeam_Logo, {height : height * 0.3}]} 
                resizeMode="contain"
            />

*/

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logoFirexStyle: {
        marginTop: '15%',
        maxWidth: 100,
        maxHeight: 75,
    },
    argTeam_Logo: {
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default LogInScreen;