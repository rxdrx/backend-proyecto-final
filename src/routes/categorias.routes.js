const express = require('express');
const router = express.Router();
const {
  getAllCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria
} = require('../controllers/categorias.controller');

// GET /api/categorias - Obtener todas las categorías
router.get('/', getAllCategorias);

// GET /api/categorias/:id - Obtener una categoría por ID
router.get('/:id', getCategoriaById);

// POST /api/categorias - Crear una categoría
router.post('/', createCategoria);

// PUT /api/categorias/:id - Actualizar una categoría
router.put('/:id', updateCategoria);

// DELETE /api/categorias/:id - Eliminar una categoría
router.delete('/:id', deleteCategoria);

module.exports = router;