import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const CustomInput = ({value, setValue, esTop, placeholder, secureTextEntry}) => {
    if({esTop}){
        inputTop(value, setValue, placeholder, secureTextEntry);
    } else {
        inputBottom(value, setValue, placeholder, secureTextEntry);
    }
};

const inputTop = (value, setValue, placeholder, secureTextEntry) => {
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
}

const inputBottom = (value, setValue, placeholder, secureTextEntry) => {
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
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',        

    },
    setColorWhite:{
        color: '#FFFFFF',
    },
    inputTop: {
        width: '100%',
        borderTopLeftRadius: '15%',
        borderTopRightRadius: '15%',
        borderBottomColor: 'transparent',
        padding: '7.5%',
        paddingLeft: 100,
        paddingRight: 100,
        borderColor: '#AE9DD9',
        borderWidth:1,
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
        borderBottomLeftRadius: '15%',
        borderBottomRightRadius: '15%',
    },
});

export default CustomInput;