import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, useWindowDimensions } from 'react-native';
import ArgTeamLogo from '../../../assets/images/ArgTeamLogo.png';

const LogInScreen = () => {
    const {height} = useWindowDimensions();
    return (
        <View style={styles.root}>
            <Text>Hoasdasdasdasdasda!!</Text>
            <Image 
                source={ArgTeamLogo}
                style={[styles.logo, {height : height * 0.3}]} 
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
    logo: {
        width: '70%',
        maxWidth:300,
        maxHeight: 200,
    },
});

export default LogInScreen;