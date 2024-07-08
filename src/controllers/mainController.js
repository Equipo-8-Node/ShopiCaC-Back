const { conn } = require("../db/dbConect");

const path = require("path");

module.exports = {
  getProductos: async (req, res) => {
    try {
      const [productos] = await conn.query(
        `SELECT p.id, p.titulo, p.precio, p.descripcion, p.imagen, p.valoracion_tasa, p.valoracion_conteo, c.nombre AS nombre_categoria FROM producto p INNER JOIN categoria c ON p.id_categoria = c.id`
      );
      console.log(productos)
      res.json(productos);
    } catch (error) {
      throw error;
    } finally {
      conn.releaseConnection();
    }
  },

  getCategorias: async (req, res) => {
    try {
      const [categorias] = await conn.query(
        `SELECT id, nombre FROM categoria`
      );
      res.json(categorias);
    } catch (error) {
      throw error;
    } finally {
      conn.releaseConnection();
    }
  },

  crearProducto: async (req, res) => {
    const sql = `INSERT INTO producto (titulo, precio, descripcion, id_categoria, imagen, valoracion_tasa, valoracion_conteo) VALUES (?,?,?,?,?,?,?);`
		const creado = await conn.query(sql, [req.body.titulo, parseFloat(req.body.precio), req.body.descripcion, req.body.categoria, req.body.imgProducto, parseFloat(req.body.rate), req.body.cantidad])
    res.redirect('agregar-producto.html')
  },

  editarProducto: async (req, res) => {},

  actualizarProducto: (req, res) => {},

  eliminarProducto: (req, res) => {},
};
