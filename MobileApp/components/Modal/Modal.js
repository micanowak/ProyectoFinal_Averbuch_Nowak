import Modal from "react-native-modal";


const MyModal = ({ isVisible, onClose }) => {
    return (
        <Modal isVisible={isVisible}>
            <View>
                <Text>Contenido de tu modal</Text>
                <TouchableOpacity onPress={onClose}>
                    <Text>Cerrar Modal</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default MyModal ;