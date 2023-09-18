import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const Calendar = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const onClose = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <View style = {styles.mostrar}>
                <TouchableOpacity onPress={toggleModal}>
                    <Text style = {{color:'white'}}>Mostrar Modal</Text>
                    
                </TouchableOpacity>

                
            </View>
            

            <Modal isVisible={modalVisible}>
                <View>
                    <Text>Contenido de tu modal</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text>Cerrar Modal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    mostrar:{
        marginHorizontal:'46%', marginVertical:'30%'
    }
});


export default Calendar;
