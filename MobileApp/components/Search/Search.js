import { SearchBar } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native-elements';
import axios from 'axios';

const Search = (listaContactosSeleccionados) => {
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

    const contactOnPressHandler = (e) =>{
        e.preventDefault();
        setSendListaContactosSeleccionados(e.key);
        listaContactosSeleccionados(sendListaContactosSeleccionados);
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
            />
            {/* Display suggested contacts */}
            {suggestedContacts.map(contact => (
                <Text key={contact.ID} onPress={contactOnPressHandler}>{contact.nombre}</Text>
            ))}
        </>
    );
}

export default Search;