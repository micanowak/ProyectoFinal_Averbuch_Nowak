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

app.get('/getEvents', async (req, res) => {
    const Evento = await PF_ArgTeam_Services.getEvents()
    res.status(200).send(Evento);
})

app.post('/logInUsuario', async (req, res) => {
    console.log("en post, req:", req)
    console.log(req.body);
    let username = req.body.username;
	let password = req.body.password;
    try {
        console.log(req);
        const results = await PF_ArgTeam_Services.logInFunction(username, password);
        console.log("results", results);
        if(results) {
            res.status(200).json({ message: 'Usuario Verificado' });
            console.log(results);
        } else {
            console.log("No encontrado");
            res.status(401).json('Nombre de usuario y/o contraseña incorrecta');
            console.log(results);
        }
        
    } catch (error) {
        console.error("error", error);
    }
})

app.post('/AgregarEvento', async (req, res) => {
    console.log("en post, req:", req)
    try {
        await PF_ArgTeam_Services.insertEvento(req.body)
        res.status(200).json({ message: 'Evento creado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo el insert' });
    }
})