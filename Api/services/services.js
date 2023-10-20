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

    static getContactList = async () => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.getContactList()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Profesionales');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getIdEvent = async (Evento) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.getidevent()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNom', Evento.nombre)
                .input('pLug', Evento.lugar)
                .input('pFechIn', Evento.fechaInicio)
                .input('pFechFin', Evento.fechaFin)
                .input('pDesc', Evento.descripcion)
                .input('pHosp', Evento.hospedaje)
                .input('pGas', Evento.gastronomia)
                .input('pEdi', Evento.numEdicionEvento)
                .input('pSpon', Evento.sponsors)
                .query('SELECT top 1 ID FROM Evento WHERE nombre = @pNom, lugar = @pLug, fechaInicio = @pFechIn, fechaFin = @pFechFin, descripcion = @pDesc, hospedaje = @pHosp, gastronomia = @pGas, numEdicionEvento = @pEdi, sponsors = @pSpon');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insertProfXEvento = async (ids) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.insert(Personaje)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdProf', ids.prof)
                .input('pIdEv', ids.evento)
                .query('INSERT INTO Profesional_X_Evento (fkProfesional, fkEvento) VALUES (@pIdProf, @pIdEv)');
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
                .input('pHosp', Evento.hospedaje)
                .input('pGas', Evento.gastronomia)
                .input('pEdi', Evento.numEdicionEvento)
                .input('pSpon', Evento.sponsors)
                .query('INSERT INTO Evento (nombre, lugar, fechaInicio, fechaFin, descripcion, hospedaje, gastronomia, numEdicionEvento, sponsors) VALUES (@pNom, @pLug, @pFechIn, @pFechFin, @pDesc, @pHosp, @pGas, @pEdi, @pSpon)');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getProfByEvent = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.getProfesionalFromEvento(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT Profesionales.* FROM Profesionales INNER JOIN Profesional_X_Evento ON fkProfesional= Profesionales.ID  INNER JOIN Evento ON fkEvento = Evento.ID WHERE fkEvento = @pId');
            returnEntity = result.recordsets[0];
            console.log(returnEntity);
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }


    static insertContacto = async (Contacto) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.insertContacto(Evento)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNom', Contacto.nombre)
                .input('pApe', Contacto.apellido)
                .input('pMail', Contacto.mail)
                .input('pRol', Contacto.rol)
                .input('pCel', Contacto.celular)
                .query('INSERT INTO Profesionales (nombre, apellido, mail, rol, celular) VALUES (@pNom, @pApe, @pMail, @pRol, @pCel)');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }


    static getContactById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.getContactById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Profesionales WHERE ID = @pId');
            returnEntity = result.recordsets[0];
            console.log(returnEntity);
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}