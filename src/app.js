import express from 'express';
import bodyParser from 'body-parser';
import itemRouter from './routers/item.router.js';
import Item from './models/user.model.js';
import User from './models/user.model.js';
import Address from './models/address.model.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Beinvenido a mi aplicacion de Express.js");
})

app.use("/items", itemRouter)


app.listen(port, () => {
    console.log(`Servisio corriendo en http://localhost:${port}`)
});

