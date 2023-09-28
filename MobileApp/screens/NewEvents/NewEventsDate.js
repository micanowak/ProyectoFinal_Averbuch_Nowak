import React from "react";
import { useState } from "react";
import { StyleSheet, View, Image, useWindowDimensions, Text, Button } from "react-native";
import { Calendar } from 'react-native-calendars';
import ArgTeamLogo from "../../assets/images/ArgTeamLogo.png";
import DataEventSmall from "../../components/DataEvent/DataEventSmall.js";
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import back from "../../assets/images/backArrow.png";

const NewEventsDate = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [fechaFin, setFechaFin] = useState(new Date());
    const [openFin, setOpenFin] = useState(false);
    const [openIn, setOpenIn] = useState(false);
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [ambasFechas, setAmbasFechas] = useState({});

    const buttonOnsubmitHandler = (fechas) => {
        fechas.preventDefault();

        const fechitas = {
            fechaInicio: fechaInicio,
            fechaFin: fechaFin
        }

        setAmbasFechas(fechitas);
        navigation.navigate("NewEventsInfo");
    }

    const onPressBack = () => {
        setFechaFin(new Date());
        setFechaInicio(new Date());

        navigation.navigate("Home");

    }

    return (
        <View style={styles.container}>
            <View style ={styles.fondoArriba}>
                <TouchableOpacity onPress={onPressBack}>
                    <Image source={back} style={styles.back} ></Image>
                </TouchableOpacity>
                <Image source={ArgTeamLogo} style={styles.imgStyle}></Image>
            </View>
            <br></br>
            <br></br>

            <Button title="Seleccionar Fecha Inicio" onPress={() => setOpenIn(true)} />
            <DatePicker
                modal
                open={openIn}
                date={fechaInicio}
                onConfirm={(date) => {
                    setOpenIn(false)
                    setFechaInicio(date)
                }}
                onCancel={() => {
                    setOpenIn(false)
                }}
            />

            {/*<Text>Fecha Inicio:</Text>
                <DatePickerIOSBase
                    style={styles.eachForm}
                    date={fechaInicio}
                    mode="date"
                    placeholder="seleccionar fecha inicio"
                    format="DD/MM/YYYY"
                    minDate="01-01-2023"
                    maxDate="01-01-2025"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            right: -5,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            borderColor: "gray",
                            alignItems: "flex-start",
                            borderWidth: 0,
                            borderBottomWidth: 1,
                        },
                        placeholderText: {
                            fontSize: 17,
                            color: "gray"
                        },
                        dateText: {
                            fontSize: 17,
                        }
                    }}
                    onDateChange={(date) => {
                        setFechaInicio(date);
                    }}
                />
            <Text style={styles.nombreMes}>Agosto</Text>
            <View>
                <Calendar 
                    style={styles.calendar}
                    current={'2023-08-10'}
                    minDate={'2023-06-01'}
                    maxDate={'2024-01-01'}
                />
            </View>
            <View style = {styles.divDias}>
                <View style={styles.divDataEvent}>
                    <Text style={styles.titleCard}>Dia Inicio</Text>
                    <DataEventSmall ></DataEventSmall> 
                </View>
                <View style={styles.divDataEvent}>
                    <Text style={styles.titleCardFinal}>Dia Final</Text>
                    <DataEventSmall ></DataEventSmall> 
                </View>
            </View>
                */}

            <TouchableOpacity style={styles.button} onPress={buttonOnsubmitHandler}>
                <Text style={styles.textButton}>Siguiente</Text>
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cfcfcf",
        flex: 1, // Cambiado a 1 para ocupar todo el espacio
    }, calendar: {
        margin: 15, borderRadius: 15, paddingBottom: 10,
    },
    fondoArriba: {
        width: "100%",
        height:'10%',
        backgroundColor: "#1A4B8E",
        alignItems: "center",
        flexDirection: "row",
        
    },
    back: {
        width: 30 ,
        height:20,
        position: 'absolute',
        marginLeft:10, 
        
    },
    button: {
        backgroundColor: '#E742EB', margin: 10, padding: 10, borderRadius: 15, width: '35%', alignContent: 'center', alignItems: 'center',
    },
    textButton:{
        color:'white'
        
    },
    divDias: {
        flexDirection: 'column', flex: 2,
        flex: 2, flexDirection: 'row',
    },
    titleCard: {
        width: '80%',
        height: '40%',
        textAlign: 'center',
        rowGap: 1,
        fontWeight: 'bold',
        color: '#E742EB',
        fontSize: 15,
        paddingTop: 8,
    },
    titleCardFinal: {
        width: '80%',
        height: '40%',
        textAlign: 'center',
        rowGap: 1,
        fontWeight: 'bold',
        color: '#6736CF',
        fontSize: 15,
        paddingTop: 8,
    },
    fondoLogo: {
        width: '100%',
        backgroundColor: '#1A4B8E',
        alignItems: "center",
        justifyContent: "center", // Cambiado de flex: "center"
    },
    imgStyle: {
        marginTop: 30,
        marginBottom: 20,
        resizeMode: "contain",
        width: 150,
        height: 50,
    },
    nombreMes: {
        backgroundColor: '#E742EB',
        color: 'white',
        alignContent: 'center',
        marginTop: 30,
        paddingTop: 5,
        marginHorizontal: '20%',
        borderRadius: 15,
        fontSize: 20,
        fontWeight: '700',
        alignItems: "center",
        textAlign: 'center',
        height: '5%', width: '60%'
    },
    divDataEvent: {
        width: '40%',
        height: '20%',
        rowGap: 2, marginTop: 5,
        alignItems: "center",
        maxHeight: '30%',
        marginLeft: 25,
    },
});

export default NewEventsDate;
