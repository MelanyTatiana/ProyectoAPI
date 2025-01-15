import User from "../models/user.model.js";
import { Op } from "sequelize";


export const getUsers = async () => {
    let data = await User.findAll();
    return data;
}

export const getUserById = async (id) => {
    const data = await User.findByPk(id);
    return data;
}

export const getUsersBySearch = async (filters) => {
    let whereFilters = {}

    if (filters.name) {
        Object.assign(whereFilters, {
            name: {
                [Op.iLike]: `%${filters.name}%`
            }
        });
    }let data =await User.findAll({
        where: whereFilters
    });
    return data;
}

export const createUser = async (body) => {
    let data = await User.create(body);
    return data;
}

export const updateUser = async (id, body) => {
    let data = await User.update(body, {
        where: {
            id: id
        }
    });
    console.log(data)
    return data [0];
}

export const deleteUser = async (id) => {
    let data = await User.destroy({
        where: {
            id: id
        }
    });
    return data;
}
