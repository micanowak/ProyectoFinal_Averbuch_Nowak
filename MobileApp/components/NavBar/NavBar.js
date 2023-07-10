import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import homeIcon from "../../assets/images/homeIcon.png";
import calendarIcon from "../../assets/images/calendarIcon.png";
import contactIcon from "../../assets/images/contactIcon.png";


const Navbar = () => {
    return (
        <View style={styles.navBarStyle}>
            <Image
                source={homeIcon}
                style={[styles.iconStyle]}
                resizeMode="contain"
            />
            <Image
                source={calendarIcon}
                style={[styles.iconStyle]}
                resizeMode="contain"
            />
            <Image
                source={contactIcon}
                style={[styles.iconStyle]}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    navBarStyle: {
        backgroundColor:'white',
        margin: 15,
        width:'80%',
        height:'5%',
        borderRadius:20,
        

    },
    iconStyle: {
        width:'10%',
        height:'80%',   
        marginLeft:10
    }
});

export default Navbar;
