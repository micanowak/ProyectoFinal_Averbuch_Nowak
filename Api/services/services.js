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
                .input('phay', Evento.hayParticipantesLibres)
                .query('SELECT top 1 ID FROM Evento WHERE nombre = @pNom, lugar = @pLug, fechaInicio = @pFechIn, fechaFin = @pFechFin, descripcion = @pDesc, hospedaje = @pHosp, gastronomia = @pGas, numEdicionEvento = @pEdi, sponsors = @pSpon, hayParticipantesLibres = @phay');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insertInscXEventoLibre = async (idInscripto, idEvento) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.insert(inscEventoLibre)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdIn', idInscripto)
                .input('pIdEv', idEvento)
                .query('INSERT INTO Inscriptos_X_EventoLibre (fkIdInscripto, fkEvento) OUTPUT INSERTED.* VALUES (@pIdIn, @pIdEv)');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insertInscXEventoEquipos = async (idEquipo, idEvento) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.insert(inscEventoEquipos)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdIn', idEquipo)
                .input('pIdEv', idEvento)
                .query('INSERT INTO Inscriptos_X_EventoEquipos (fkIdEquipo, fkIdEvento) OUTPUT INSERTED.* VALUES (@pIdIn, @pIdEv)');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insertProfXEvento = async (idContacto, idEvento) => {
        let returnEntity = null;
        console.log('Estoy en: PersonajeServices.insert(profevento)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdProf', idContacto)
                .input('pIdEv', idEvento)
                .query('INSERT INTO Profesional_X_Evento (fkProfesional, fkEvento) VALUES (@pIdProf, @pIdEv)');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insertParticipante = async (Persona) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.insertParti(Persona)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNom', Persona.nombre)
                .input('pApe', Persona.apellido)
                .input('pDni', Persona.DNI)
                .query('INSERT INTO Participante (nombre, apellido, DNI) OUTPUT INSERTED.* VALUES (@pNom, @pApe, @pDni)');

            returnEntity = result.recordset[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insertPerXEquipo = async (Persona) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.insertPerEquipo(Persona)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNom', Persona.nombre)
                .input('pApe', Persona.apellido)
                .input('pDNI', Persona.DNI)
                .input('pIdE', sql.Int, Persona.IdEquipo)
                .query('INSERT INTO Persona_X_Equipo (nombre, apellido, DNI, fkIdEquipo) OUTPUT INSERTED.* VALUES (@pNom, @pApe, @pDNI, @pIdE)');

            returnEntity = result.recordset[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insertEquipo = async (Equipo) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.insertEquipo(Equipo)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNom', Equipo.nombre)
                .input('pNomCon', Equipo.nombreContactoReferencia)
                .input('pApe', Equipo.apellidoContactoReferencia)
                .input('pCel', Equipo.celularContactoReferencia)
                .query('INSERT INTO Equipo (nombre, nombreContactoReferencia, apellidoContactoReferencia, celularContactoReferencia) OUTPUT INSERTED.* VALUES (@pNom, @pNomCon, @pApe, @pCel)');

            returnEntity = result.recordset[0];
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
                .input('phay', Evento.hayParticipantesLibres)
                .query('INSERT INTO Evento (nombre, lugar, fechaInicio, fechaFin, descripcion, hospedaje, gastronomia, numEdicionEvento, sponsors, hayParticipantesLibres) OUTPUT INSERTED.* VALUES (@pNom, @pLug, @pFechIn, @pFechFin, @pDesc, @pHosp, @pGas, @pEdi, @pSpon, @phay)');

            returnEntity = result.recordset[0];
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

    static getPartiById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.getPartiById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT Participante.* FROM Participante INNER JOIN Inscriptos_X_EventoLibre ON fkIdInscripto= Participante.ID  INNER JOIN Evento ON fkEvento = Evento.ID WHERE fkEvento = @pId');
            returnEntity = result.recordsets[0];
            console.log(returnEntity);
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getTeamById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.getTeamById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT Equipo.* FROM Equipo INNER JOIN Inscriptos_X_EventoEquipos ON fkIdEquipo = Equipo.ID  INNER JOIN Evento ON fkIdEvento = Evento.ID WHERE fkIdEvento = @pId');
            returnEntity = result.recordsets[0];
            console.log(returnEntity);
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getPerEquipo = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.getPerEquipo(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT Persona_X_Equipo.* FROM Persona_X_Equipo INNER JOIN Equipo ON fkIdEquipo = Equipo.ID WHERE fkIdEquipo = @pId');
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