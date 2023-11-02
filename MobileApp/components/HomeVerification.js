import React from "react";
import HomeScreen from "./HomeScreen";  

const ParentComponent = () => {
    const sendlistaEventos = (eventos) => {
        console.log("Lista de eventos en el componente padre:", eventos);
    };

    return <HomeScreen sendlistaEventos={sendlistaEventos} />;
};

export default ParentComponent;
