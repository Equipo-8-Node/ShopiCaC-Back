const { conn } = require('../db/database');

module.exports = {

    getAllProducts: async (req, res) => {
        try {
            const [productos] = await conn.query(`SELECT p.id, p.titulo, p.precio, p.descripcion, p.imagen, p.valoracion_tasa, p.valoracion_conteo, c.nombre AS nombre_categoria FROM producto p INNER JOIN categoria c ON p.id_categoria = c.id`);
            res.json(productos)
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },

    getProductsInicio: async (req, res) => {
        try {
            const [productos] = await conn.query(`SELECT p.id, p.titulo, p.precio, p.imagen, c.nombre AS nombre_categoria FROM producto p JOIN categoria c ON p.id_categoria = c.id WHERE p.id IN (1, 5, 9, 16)`);
            res.json(productos)
        } catch (error) {
            throw error
        } finally {
            conn.releaseConnection();
        }
    }
};