import React from 'react';
import {StyleSheet, View, Text, Image, useWindowDimensions } from 'react-native';
import ArgTeamLogo from '../../../assets/images/ArgTeamLogo.png';

const LogInScreen = () => {
    const {height} = useWindowDimensions();
    return (
        <View style={styles.root}>
            <Text>Log In Screen</Text>
            <Image 
                source={ArgTeamLogo}
                style={[styles.argTeam_Logo, {height : height * 0.3}]} 
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    argTeam_Logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default LogInScreen;