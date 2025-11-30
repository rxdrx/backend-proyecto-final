const itemsPedidoMock = require('../mocks/items_pedido.mock');

// Obtener todos los items de pedido
const getAllItemsPedido = (req, res) => {
  res.json({
    success: true,
    data: itemsPedidoMock,
    total: itemsPedidoMock.length
  });
};

// Obtener un item de pedido por ID
const getItemPedidoById = (req, res) => {
  const { id } = req.params;
  const item = itemsPedidoMock.find(i => i.id_item_pedido === parseInt(id));
  
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
};

// Obtener items por pedido
const getItemsByPedido = (req, res) => {
  const { id_pedido } = req.params;
  const items = itemsPedidoMock.filter(i => i.id_pedido === parseInt(id_pedido));
  
  res.json({
    success: true,
    data: items,
    total: items.length
  });
};

// Crear un item de pedido
const createItemPedido = (req, res) => {
  const nuevoItem = {
    id_item_pedido: itemsPedidoMock.length + 1,
    ...req.body
  };
  
  itemsPedidoMock.push(nuevoItem);
  
  res.status(201).json({
    success: true,
    message: 'Item de pedido creado exitosamente',
    data: nuevoItem
  });
};

// Actualizar un item de pedido
const updateItemPedido = (req, res) => {
  const { id } = req.params;
  const index = itemsPedidoMock.findIndex(i => i.id_item_pedido === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Item de pedido no encontrado'
    });
  }
  
  itemsPedidoMock[index] = {
    ...itemsPedidoMock[index],
    ...req.body
  };
  
  res.json({
    success: true,
    message: 'Item de pedido actualizado exitosamente',
    data: itemsPedidoMock[index]
  });
};

// Eliminar un item de pedido
const deleteItemPedido = (req, res) => {
  const { id } = req.params;
  const index = itemsPedidoMock.findIndex(i => i.id_item_pedido === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Item de pedido no encontrado'
    });
  }
  
  itemsPedidoMock.splice(index, 1);
  
  res.json({
    success: true,
    message: 'Item de pedido eliminado exitosamente'
  });
};

module.exports = {
  getAllItemsPedido,
  getItemPedidoById,
  getItemsByPedido,
  createItemPedido,
  updateItemPedido,
  deleteItemPedido
};