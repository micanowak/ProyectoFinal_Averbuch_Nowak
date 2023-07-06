import express from "express";
import cors from 'cors';

const app = express();
import { PF_ArgTeam_Services } from "./services/services.js";

const port = 3000;


app.use(express.json())
app.use(cors());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

app.post('/logInUsuario', async (req, res) => {
    console.log("en post, req:", req)
    console.log(req.body);
    let username = req.body.username;
	let password = req.body.password;
    try {
        console.log(req);
        const results = await PF_ArgTeam_Services.logInFunction(username, password);
        if(results != undefined) {
            res.status(200).json({ message: 'Usuario Verificado' });
        } else {
            res.status(500).json({ error: 'Nombre de usuario y/o contraseña incorrecta' });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Nombre de usuario y/o contraseña incorrecta' });
    }
    console.log(username, password);
})