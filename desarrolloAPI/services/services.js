import config from '../db-config.js';
import sql from 'mssql';

export class PF_ArgTeam_Services {
    
    static logInFunction = async (usuario) => {
        let returnEntity = null;
        console.log('Estoy en: PF_ArgTeam_Services.logInFunction(usuario)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNombre', usuario.nombre)
                .input('pContra', usuario.contrasenia)
                .query('SELECT * FROM Usuario WHERE nombre= @pNombre and contrasenia = @pContra');
            returnEntity = result.recordsets[0][0];
            console.log("Usuario Verificado");
        } catch (error) {
            console.log("Nombre de usuario y/o contraseña incorrecta");
        }
        return returnEntity;
    }



}