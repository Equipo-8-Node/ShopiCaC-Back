const { conn } = require("../db/database");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const [productos] = await conn.query(`
        SELECT
          p.id,
          p.titulo,
          p.precio,
          p.descripcion,
          p.imagen,
          p.valoracion_tasa,
          p.valoracion_conteo,
          c.nombre AS nombre_categoria
        FROM
          producto p
        INNER JOIN
          categoria c
        ON
          p.id_categoria = c.id`);
      res.json(productos);
    } catch (error) {
      throw error;
    } finally {
      conn.releaseConnection();
    }
  },

  getProductsInicio: async (req, res) => {
    try {
      const [productos] = await conn.query(
        `SELECT p.id, p.titulo, p.precio, p.imagen, c.nombre AS nombre_categoria FROM producto p JOIN categoria c ON p.id_categoria = c.id WHERE p.id IN (2, 5, 9, 16)`
      );
      res.json(productos);
    } catch (error) {
      throw error;
    } finally {
      conn.releaseConnection();
    }
  },

  getCategorias: async (req, res) => {
    try {
      const [categorias] = await conn.query(`SELECT id, nombre FROM categoria`);
      res.json(categorias);
    } catch (error) {
      throw error;
    } finally {
      conn.releaseConnection();
    }
  },

  crearProducto: async (req, res) => {
    const sql = `INSERT INTO producto (titulo, precio, descripcion, id_categoria, imagen, valoracion_tasa, valoracion_conteo) VALUES (?,?,?,?,?,?,?);`;
    const creado = await conn.query(sql, [
      req.body.titulo,
      parseFloat(req.body.precio),
      req.body.descripcion,
      req.body.categoria,
      req.body.imgProducto,
      parseFloat(req.body.tasa),
      req.body.cantidad,
    ]);
    res.redirect("/agregar-producto");
  },

  editarProducto: async (req, res) => {
    // console.log(req.params.id)
    const [registro] = await conn.query(
      `
      SELECT
        p.id,
        p.titulo,
        p.precio,
        p.descripcion,
        p.imagen,
        p.valoracion_tasa,
        p.valoracion_conteo,
        c.id AS id_categoria,
        c.nombre AS nombre_categoria
      FROM
        producto p
      INNER JOIN
        categoria c
      ON
        p.id_categoria = c.id
      WHERE
        p.id=?`,
      req.params.id
    );
    console.log(registro);

    res.render("editarproducto", {
      producto: registro[0],
    });
  },

  actualizarProducto: async (req, res) => {
    const sql = `UPDATE producto SET titulo = ?, precio = ?, descripcion = ?, id_categoria = ?, imagen = ?, valoracion_tasa = ?, valoracion_conteo = ? WHERE id = ?`;
    // console.log(req.body)

    const {
      titulo,
      precio,
      descripcion,
      categoria,
      imgProducto,
      tasa,
      cantidad,
      idActualizar,
    } = req.body;
    const modificado = await conn.query(sql, [
      titulo,
      precio,
      descripcion,
      categoria,
      imgProducto,
      tasa,
      cantidad,
      idActualizar,
    ]);
    console.log(modificado);
    res.redirect("/productos");
  },

  eliminarProducto: async (req, res) => {
    // const eliminado = await conn.query(`DELETE FROM producto WHERE id=?`, req.body.idEliminar)
    // res.redirect('/productos')
    res.send(
      `<h2>Se hizo algo con ${req.body.eliminar} en el delete</h2><a href="/dinamic/1">Regresar a la página anterior</a>`
    );
  },
};
