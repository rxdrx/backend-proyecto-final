const express = require('express');
const router = express.Router();
const {
  getAllItemsPedido,
  getItemPedidoById,
  getItemsByPedido,
  createItemPedido,
  updateItemPedido,
  deleteItemPedido
} = require('../controllers/items_pedido.controller');

// GET /api/items-pedido - Obtener todos los items de pedido
router.get('/', getAllItemsPedido);

// GET /api/items-pedido/pedido/:id_pedido - Obtener items de un pedido
router.get('/pedido/:id_pedido', getItemsByPedido);

// GET /api/items-pedido/:id - Obtener un item de pedido por ID
router.get('/:id', getItemPedidoById);

// POST /api/items-pedido - Crear un item de pedido
router.post('/', createItemPedido);

// PUT /api/items-pedido/:id - Actualizar un item de pedido
router.put('/:id', updateItemPedido);

// DELETE /api/items-pedido/:id - Eliminar un item de pedido
router.delete('/:id', deleteItemPedido);

module.exports = router;