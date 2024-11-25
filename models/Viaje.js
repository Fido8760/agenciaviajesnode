import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING, // Título del viaje
        allowNull: false
    },
    precio: {
        type: Sequelize.STRING, // Cambia a FLOAT si es un número
        allowNull: false
    },
    fecha_ida: {
        type: Sequelize.DATE, // Fecha de inicio del viaje
        allowNull: false
    },
    fecha_vuelta: {
        type: Sequelize.DATE, // Fecha de regreso
        allowNull: false
    },
    imagen: {
        type: Sequelize.STRING, // URL o nombre de la imagen
        allowNull: false
    },
    descripcion: {
        type: Sequelize.TEXT, // Descripción más larga
        allowNull: false
    },
    disponibles: {
        type: Sequelize.INTEGER, // Número de espacios disponibles
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING, // URL amigable o identificador único
        allowNull: false
    },
});
