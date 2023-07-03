import React, { useState } from 'react';
import {StyleSheet, View, Text, Image, useWindowDimensions } from 'react-native';
//import ArgTeamLogo from '../../assets/images/ArgTeamLogo.png';
/*import logoFirex from '../../assets/images/LogoFirex.png';
import CustomInputTop from '../components/CustomInputTop/CustomInputTop'; 
import CustomInputBottom from '../components/CustomInputBottom/CustomInputBottom'; 
import CustomButton  from '../components/CustomButton/CustomButton';*/


const HomeScreen = (sendUsername, sendPassword) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    return  (
        <View>
            
        </View>
    );
};

/*<Image 
                source={ArgTeamLogo}
                style={[styles.argTeam_Logo, {height : height * 0.3}]} 
                resizeMode="contain"
            />*/


const styles = StyleSheet.create({
    body: {
        alignItems:'center'
    },
    argTeam_Logo: {
        maxWidth: 150,
        maxHeight: 100,
        alignItems:'center',
        display:'flex',
    },
});
export default HomeScreen;