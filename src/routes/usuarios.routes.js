const express = require('express');
const router = express.Router();
const {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario
} = require('../controllers/usuarios.controller');

// GET /api/usuarios - Obtener todos los usuarios
router.get('/', getAllUsuarios);

// GET /api/usuarios/:id - Obtener un usuario por ID
router.get('/:id', getUsuarioById);

// POST /api/usuarios - Crear un usuario
router.post('/', createUsuario);

// PUT /api/usuarios/:id - Actualizar un usuario
router.put('/:id', updateUsuario);

// DELETE /api/usuarios/:id - Eliminar un usuario
router.delete('/:id', deleteUsuario);

module.exports = router;