import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const CustomInputBottom = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <View>   
                <TextInput 
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeholder} 
                    style={styles.inputBottom}
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
    inputBottom:{
        width: '100%',
        padding: '7.5%',
        paddingLeft: 100,
        paddingRight: 100,
        borderColor: '#AE9DD9',
        borderWidth:1,
        alignItems: 'center',  
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});

export default CustomInputBottom;