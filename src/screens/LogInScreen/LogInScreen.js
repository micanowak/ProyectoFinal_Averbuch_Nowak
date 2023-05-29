import React, { useState } from 'react';
import {StyleSheet, View, Text, Image, useWindowDimensions } from 'react-native';
import ArgTeamLogo from '../../../assets/images/ArgTeamLogo.png';
import logoFirex from '../../../assets/images/LogoFirex.png';
import CustomInput from '../../components/CustomInput'; 

const LogInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();


    return (
        <View style={styles.root}>
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

            <CustomInput 
                value={username} 
                setValue={setUsername} 
                esTop={true} 
                placeholder="Usuario"
                secureTextEntry={false}
            />
            <CustomInput 
                value={password} 
                setValue={setPassword} 
                esTop={false} 
                placeholder="Contraseña"
                secureTextEntry={true}
            />

        </View>
    );
};

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