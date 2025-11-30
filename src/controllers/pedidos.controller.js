const pedidosMock = require('../mocks/pedidos.mock');
const itemsPedidoMock = require('../mocks/items_pedido.mock');

// Obtener todos los pedidos
const getAllPedidos = (req, res) => {
  res.json({
    success: true,
    data: pedidosMock,
    total: pedidosMock.length
  });
};

// Obtener un pedido por ID
const getPedidoById = (req, res) => {
  const { id } = req.params;
  const pedido = pedidosMock.find(p => p.id_pedido === parseInt(id));
  
  if (!pedido) {
    return res.status(404).json({
      success: false,
      message: 'Pedido no encontrado'
    });
  }
  
  // Incluir los items del pedido
  const items = itemsPedidoMock.filter(item => item.id_pedido === parseInt(id));
  
  res.json({
    success: true,
    data: {
      ...pedido,
      items
    }
  });
};

// Obtener pedidos por usuario
const getPedidosByUsuario = (req, res) => {
  const { id_usuario } = req.params;
  const pedidos = pedidosMock.filter(p => p.id_usuario === parseInt(id_usuario));
  
  res.json({
    success: true,
    data: pedidos,
    total: pedidos.length
  });
};

// Crear un pedido
const createPedido = (req, res) => {
  const nuevoPedido = {
    id_pedido: pedidosMock.length + 1,
    ...req.body,
    fecha_pedido: new Date().toISOString(),
    fecha_actualizacion: new Date().toISOString()
  };
  
  pedidosMock.push(nuevoPedido);
  
  res.status(201).json({
    success: true,
    message: 'Pedido creado exitosamente',
    data: nuevoPedido
  });
};

// Actualizar un pedido
const updatePedido = (req, res) => {
  const { id } = req.params;
  const index = pedidosMock.findIndex(p => p.id_pedido === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Pedido no encontrado'
    });
  }
  
  pedidosMock[index] = {
    ...pedidosMock[index],
    ...req.body,
    fecha_actualizacion: new Date().toISOString()
  };
  
  res.json({
    success: true,
    message: 'Pedido actualizado exitosamente',
    data: pedidosMock[index]
  });
};

// Eliminar un pedido
const deletePedido = (req, res) => {
  const { id } = req.params;
  const index = pedidosMock.findIndex(p => p.id_pedido === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Pedido no encontrado'
    });
  }
  
  pedidosMock.splice(index, 1);
  
  res.json({
    success: true,
    message: 'Pedido eliminado exitosamente'
  });
};

module.exports = {
  getAllPedidos,
  getPedidoById,
  getPedidosByUsuario,
  createPedido,
  updatePedido,
  deletePedido
};