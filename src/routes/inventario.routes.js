const express = require('express');
const router = express.Router();
const {
  getAllInventario,
  getInventarioById,
  getInventarioByProducto,
  createInventario,
  updateInventario,
  deleteInventario
} = require('../controllers/inventario.controller');

// GET /api/inventario - Obtener todo el inventario
router.get('/', getAllInventario);

// GET /api/inventario/producto/:id_producto - Obtener inventario por producto
router.get('/producto/:id_producto', getInventarioByProducto);

// GET /api/inventario/:id - Obtener un registro de inventario por ID
router.get('/:id', getInventarioById);

// POST /api/inventario - Crear un registro de inventario
router.post('/', createInventario);

// PUT /api/inventario/:id - Actualizar un registro de inventario
router.put('/:id', updateInventario);

// DELETE /api/inventario/:id - Eliminar un registro de inventario
router.delete('/:id', deleteInventario);

module.exports = router;