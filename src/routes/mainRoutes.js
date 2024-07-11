const express = require("express");
const router = express.Router();
const controladores = require("../controllers/mainController");
const multer = require("multer");
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/img/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const uploadFile = multer({ storage });

router.get("/getAllProducts", controladores.getAllProducts);
router.get("/getProductsInicio", controladores.getProductsInicio);
router.get("/getCategorias", controladores.getCategorias);

router.post("/crearproducto",uploadFile.single('imgProducto'), controladores.crearProducto);
router.get("/editarproducto/:id", controladores.editarProducto);
router.patch("/actualizarproducto",uploadFile.single('imgProducto'), controladores.actualizarProducto);
router.delete("/eliminarproducto", controladores.eliminarProducto);

module.exports = router;
