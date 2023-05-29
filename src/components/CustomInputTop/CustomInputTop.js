import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const CustomInputTop = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeholder} 
                    style={styles.inputTop}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',        

    },
    inputTop: {
        width: '100%',
        borderTopLeftRadius: '15%',
        borderTopRightRadius: '15%',
        borderBottomColor: 'transparent',
        padding: '7.5%',
        paddingLeft: 112.2,
        paddingRight: 112.1,
        borderColor: '#AE9DD9',
        borderWidth:1,
        alignItems: 'center',  
    },
});

export default CustomInputTop;