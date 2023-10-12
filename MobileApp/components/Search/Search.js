import { SearchBar } from 'react-native-elements';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'; 

const Search = () => {

    const baseURL = "http://localhost:3000/getContactList";
    const [ListaContactos, setListaContactos] = useState([{}]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setListaContactos(response.data);
            console.log(listaEventos);
            sendlistaEventos(listaEventos);
        });
    }, []);

    updateSearch = (search) => {
        this.setState({ search });
    };

    const { search } = this.state;

    return (
        <SearchBar
            placeholder="Ingrese Nombre"
            onChangeText={this.updateSearch}
            value={search}
        />
    );
}

export default Search;