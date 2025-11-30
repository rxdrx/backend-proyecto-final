const express = require('express');
const router = express.Router();
const {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
} = require('../controllers/productos.controller');

// GET /api/productos - Obtener todos los productos
router.get('/', getAllProductos);

// GET /api/productos/:id - Obtener un producto por ID
router.get('/:id', getProductoById);

// POST /api/productos - Crear un producto
router.post('/', createProducto);

// PUT /api/productos/:id - Actualizar un producto
router.put('/:id', updateProducto);

// DELETE /api/productos/:id - Eliminar un producto
router.delete('/:id', deleteProducto);

module.exports = router;