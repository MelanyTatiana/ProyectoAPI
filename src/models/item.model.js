import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const modelName = "Item";
const Item = sequelize.define(modelName, {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    stock: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    category: {
        type: DataTypes.ENUM('Celulares', 'Laptop', 'Tablet', 'Accesorios'),
        allowNull: false
    }
});

await Item.sync({
    force: false,
    alter: {
        drop: false
    }
}).then(() => {
    console.log(`Modelo Item ha sido creado correctamente.`);
}).catch((err) => {
    console.error(`Error en la creacion del modelo Item ${modelName}:\n`, err);
}); 

export default Item 