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

app.get('/getContactList', async (req, res) => {
    const ListaContactos = await PF_ArgTeam_Services.getContactList()
    res.status(200).send(ListaContactos);
})

app.get('/getIdEvent', async (req, res) => {
    const id = await PF_ArgTeam_Services.getIdEvent(req.body)
    res.status(200).send(id);
})

app.post('/insertProfEvento', async (req, res) => {
    console.log("en post, req:", req)
    try {
        await PF_ArgTeam_Services.insertProfXEvento(req.idContacto, req.idEvento)
        res.status(200).json({ message: 'creada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo el insert' });
    }
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

app.get('/getProfByEvent/:id', async (req, res) => {
    console.log(req.params.id);
    const Profesionales = await PF_ArgTeam_Services.getProfByEvent(req.params.id)
    res.status(200).send(Profesionales);
})

app.post('/insertContacto', async (req, res) => {
    console.log("en post, req:", req)
    try {
        await PF_ArgTeam_Services.insertContacto(req.body)
        res.status(200).json({ message: 'Contacto creado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo el insert' });
    }
})

app.get('/getContactById/:id', async (req, res) => {
    console.log(req.params.id);
    const Profesional = await PF_ArgTeam_Services.getContactById(req.params.id)
    res.status(200).send(Profesional);
})