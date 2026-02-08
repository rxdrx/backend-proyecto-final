const { Pedido, ItemPedido } = require('../models');

// Obtener todos los pedidos
const getAllPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    
    res.json({
      success: true,
      data: pedidos,
      total: pedidos.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener pedidos',
      error: error.message
    });
  }
};

// Obtener un pedido por ID
const getPedidoById = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findByPk(id);
    
    if (!pedido) {
      return res.status(404).json({
        success: false,
        message: 'Pedido no encontrado'
      });
    }
    
    // Incluir los items del pedido
    const items = await ItemPedido.findAll({
      where: { id_pedido: parseInt(id) }
    });
    
    res.json({
      success: true,
      data: {
        ...pedido.toJSON(),
        items
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener pedido',
      error: error.message
    });
  }
};

// Obtener pedidos por usuario
const getPedidosByUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const pedidos = await Pedido.findAll({
      where: { id_usuario: parseInt(id_usuario) }
    });
    
    res.json({
      success: true,
      data: pedidos,
      total: pedidos.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener pedidos por usuario',
      error: error.message
    });
  }
};

// Crear un pedido
const createPedido = async (req, res) => {
  try {
    const nuevoPedido = await Pedido.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Pedido creado exitosamente',
      data: nuevoPedido
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear pedido',
      error: error.message
    });
  }
};

// Actualizar un pedido
const updatePedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findByPk(id);
    
    if (!pedido) {
      return res.status(404).json({
        success: false,
        message: 'Pedido no encontrado'
      });
    }
    
    await pedido.update(req.body);
    
    res.json({
      success: true,
      message: 'Pedido actualizado exitosamente',
      data: pedido
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar pedido',
      error: error.message
    });
  }
};

// Eliminar un pedido
const deletePedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findByPk(id);
    
    if (!pedido) {
      return res.status(404).json({
        success: false,
        message: 'Pedido no encontrado'
      });
    }
    
    await pedido.destroy();
    
    res.json({
      success: true,
      message: 'Pedido eliminado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar pedido',
      error: error.message
    });
  }
};

module.exports = {
  getAllPedidos,
  getPedidoById,
  getPedidosByUsuario,
  createPedido,
  updatePedido,
  deletePedido
};