const express = require('express');
const router = express.Router();
const {
  getAllPedidos,
  getPedidoById,
  getPedidosByUsuario,
  createPedido,
  updatePedido,
  deletePedido
} = require('../controllers/pedidos.controller');

// GET /api/pedidos - Obtener todos los pedidos
router.get('/', getAllPedidos);

// GET /api/pedidos/usuario/:id_usuario - Obtener pedidos de un usuario
router.get('/usuario/:id_usuario', getPedidosByUsuario);

// GET /api/pedidos/:id - Obtener un pedido por ID
router.get('/:id', getPedidoById);

// POST /api/pedidos - Crear un pedido
router.post('/', createPedido);

// PUT /api/pedidos/:id - Actualizar un pedido
router.put('/:id', updatePedido);

// DELETE /api/pedidos/:id - Eliminar un pedido
router.delete('/:id', deletePedido);

module.exports = router;