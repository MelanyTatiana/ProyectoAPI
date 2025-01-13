import Item from "../models/item.model.js";
let id = 0;

export const getItems = async () => {
    let data = await Item.findAll();
    return data;
}

export const getItemById = (req, res) => {
    const params = req.params; //{id: 10}
    res.send(`Obteniedo el item con ID ${params?.id}`);
}

export const getItemsBySearch = (req, res) => {
    const queryParams = req.query;
    res.send(`Obteniedo item que cumplan con la busqueda: ${JSON.stringify(queryParams)}`);
}

export const createItem = async (body) => {
   let data = await Item.create(body);
   return data;
}

export const updateItem = async (id, body) => {
 let data = await Item.update(body, {
    where: {
        id: id 
    }
 });
    console.log(data)
    return data [0];
}

export const deleteItem = (req, res) => {
    const {id} = req.params;
    res.send(`Eliminando el item con id: ${id}`);
}