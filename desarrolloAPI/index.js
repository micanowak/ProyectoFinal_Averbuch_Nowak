import express from "express";
const app = express();
import { PF_ArgTeam_Services } from "./services/services";

const port = 3000;

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

app.get('/Usuario', async (req, res) => {
    const user = await PF_ArgTeam_Services.logInFunction(req.params.usuario)
    res.status(200).send(user)
})