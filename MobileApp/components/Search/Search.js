import { SearchBar } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const baseURL = "http://localhost:3000/getContactList";
    const [contactList, setContactList] = useState([]);
    const [search, setSearch] = useState('');
    const [suggestedContacts, setSuggestedContacts] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setContactList(response.data);
        });
    }, []);

    const updateSearch = (text) => {
        setSearch(text);
        // Filter the contact list based on the first three characters of the search input
        if (text.length >= 3) {
            const filteredContacts = contactList.filter(contact =>
                contact.nombre.toLowerCase().includes(text.toLowerCase())
            );
            setSuggestedContacts(filteredContacts);
        } else {
            setSuggestedContacts([]);
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
                <Text key={contact.id}>{contact.name}</Text>
            ))}
        </>
    );
}

export default Search;