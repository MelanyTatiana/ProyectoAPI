import { Op } from "sequelize";
import Item from "../models/item.model.js";
let id = 0;

export const getItems = async () => {
    let data = await Item.findAll();
    return data;
}

export const getItemById = async (id) => {
    const data = await Item.findByPk(id);
    return data;
}

export const getItemsBySearch =async (filters) => {
    let whereFilters = {}

    if (filters.name) {
        Object.assign(whereFilters, {
            name: {
                [Op.iLike]: `%${filters.name}%`
            }
        });
    }
    if (filters.cayegory) {
        Object.assign(whereFilters, {category: filters.category });
    }
    if (filters.maxPrice || filters.minPrice) {
        Object.assign(whereFilters, {price: {
            [Op.gte]: filters.minPrice ?? 0,
            [Op.lte]: filters.maxPrice ?? 9999999
        } });
    }

    let data = await Item.findAll({
        where: {
            [Op.and]: whereFilters
        }
    });
    return data;
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