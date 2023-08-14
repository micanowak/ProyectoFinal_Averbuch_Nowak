import config from '../dbconfig.js';
import sql from 'mssql';

export class PF_ArgTeam_Services {
    
    static logInFunction = async (username, password) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.logInFunction(username, password)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', username)
                .input('pContra', password)
                .query('SELECT * FROM Usuario WHERE username = @pNombre and password = @pContra');
                returnEntity = result.recordsets[0][0];
            console.log(returnEntity);
        } catch (error) {
            console.log(error.message);
        }
        return returnEntity;
    }

    static getEvents = async () => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.getEvents()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Evento');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insertEvento = async (Evento) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.insertEvento(Evento)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNom', Evento.nombre)
                .input('pLug', Evento.lugar)
                .input('pFechIn', Evento.fechaInicio)
                .input('pFechFin', Evento.fechaFin)
                .input('pDesc', Evento.descripcion)
                .query('INSERT INTO Evento (nombre, lugar, fechaInicio, fechaFin, descripcion) VALUES (@pNom, @pLug, @pFechIn, @pFechFin, @pDesc)');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

}