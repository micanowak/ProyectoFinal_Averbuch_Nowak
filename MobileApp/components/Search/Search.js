import { SearchBar, Text } from 'react-native-elements';
import React, { useState, useEffect,  } from 'react';
import { TouchableOpacity, View } from 'react-native';
import axios from 'axios';

const Search = ({ listaContactosSeleccionados }) => {
    const baseURL = "http://localhost:3000/getContactList";
    const [contactList, setContactList] = useState([{}]);
    const [search, setSearch] = useState('');
    const [suggestedContacts, setSuggestedContacts] = useState([{}]);
    const [sendListaContactosSeleccionados, setSendListaContactosSeleccionados] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setContactList(response.data);
        });
    }, []);

    const contactOnPressHandler = (id) => {
        console.log(id);
        console.log("nn");
        const updatedSendListaContactosSeleccionados = [...sendListaContactosSeleccionados, id];
        setSendListaContactosSeleccionados(updatedSendListaContactosSeleccionados);
        listaContactosSeleccionados(updatedSendListaContactosSeleccionados);
    }

    const updateSearch = (text) => {
        setSearch(text);
        if (text.length > 0) {
            const filteredContacts = contactList.filter(contact =>
                contact.nombre.toLowerCase().includes(text.toLowerCase())
            );
            setSuggestedContacts(filteredContacts);
        } else {
            setSuggestedContacts([{}]);
        }
    };

    return (
        <>
            <SearchBar
                placeholder="Ingrese Nombre"
                onChangeText={updateSearch}
                value={search}
                inputStyle={{backgroundColor: 'white', borderRadius:10}}
                containerStyle={{backgroundColor: 'transparent', borderRadius: 20, border:'none'}}
                placeholderTextColor={{color: 'black'}}
                inputContainerStyle={{backgroundColor: '#845FD3', borderRadius:15, padding:6}}

            />
            {suggestedContacts.map(contact => (
                <TouchableOpacity
                    key={contact.ID}
                    onPress={() => contactOnPressHandler(contact.ID)}
                >
                    <View>
                        <Text>{contact.nombre} {contact.ID}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </>
    );
}

export default Search;