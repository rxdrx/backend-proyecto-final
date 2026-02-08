const { ItemPedido } = require('../models');

// Obtener todos los items de pedido
const getAllItemsPedido = async (req, res) => {
  try {
    const items = await ItemPedido.findAll();
    
    res.json({
      success: true,
      data: items,
      total: items.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener items de pedido',
      error: error.message
    });
  }
};

// Obtener un item de pedido por ID
const getItemPedidoById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ItemPedido.findByPk(id);
    
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item de pedido no encontrado'
      });
    }
    
    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener item de pedido',
      error: error.message
    });
  }
};

// Obtener items por pedido
const getItemsByPedido = async (req, res) => {
  try {
    const { id_pedido } = req.params;
    const items = await ItemPedido.findAll({
      where: { id_pedido: parseInt(id_pedido) }
    });
    
    res.json({
      success: true,
      data: items,
      total: items.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener items por pedido',
      error: error.message
    });
  }
};

// Crear un item de pedido
const createItemPedido = async (req, res) => {
  try {
    const nuevoItem = await ItemPedido.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Item de pedido creado exitosamente',
      data: nuevoItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear item de pedido',
      error: error.message
    });
  }
};

// Actualizar un item de pedido
const updateItemPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ItemPedido.findByPk(id);
    
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item de pedido no encontrado'
      });
    }
    
    await item.update(req.body);
    
    res.json({
      success: true,
      message: 'Item de pedido actualizado exitosamente',
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar item de pedido',
      error: error.message
    });
  }
};

// Eliminar un item de pedido
const deleteItemPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ItemPedido.findByPk(id);
    
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item de pedido no encontrado'
      });
    }
    
    await item.destroy();
    
    res.json({
      success: true,
      message: 'Item de pedido eliminado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar item de pedido',
      error: error.message
    });
  }
};

module.exports = {
  getAllItemsPedido,
  getItemPedidoById,
  getItemsByPedido,
  createItemPedido,
  updateItemPedido,
  deleteItemPedido
};