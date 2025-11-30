const inventarioMock = require('../mocks/inventario.mock');

// Obtener todo el inventario
const getAllInventario = (req, res) => {
  res.json({
    success: true,
    data: inventarioMock,
    total: inventarioMock.length
  });
};

// Obtener un registro de inventario por ID
const getInventarioById = (req, res) => {
  const { id } = req.params;
  const inventario = inventarioMock.find(i => i.id_inventario === parseInt(id));
  
  if (!inventario) {
    return res.status(404).json({
      success: false,
      message: 'Registro de inventario no encontrado'
    });
  }
  
  res.json({
    success: true,
    data: inventario
  });
};

// Obtener inventario por producto
const getInventarioByProducto = (req, res) => {
  const { id_producto } = req.params;
  const inventarios = inventarioMock.filter(i => i.id_producto === parseInt(id_producto));
  
  res.json({
    success: true,
    data: inventarios,
    total: inventarios.length
  });
};

// Crear un registro de inventario
const createInventario = (req, res) => {
  const nuevoInventario = {
    id_inventario: inventarioMock.length + 1,
    ...req.body
  };
  
  inventarioMock.push(nuevoInventario);
  
  res.status(201).json({
    success: true,
    message: 'Registro de inventario creado exitosamente',
    data: nuevoInventario
  });
};

// Actualizar un registro de inventario
const updateInventario = (req, res) => {
  const { id } = req.params;
  const index = inventarioMock.findIndex(i => i.id_inventario === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Registro de inventario no encontrado'
    });
  }
  
  inventarioMock[index] = {
    ...inventarioMock[index],
    ...req.body
  };
  
  res.json({
    success: true,
    message: 'Registro de inventario actualizado exitosamente',
    data: inventarioMock[index]
  });
};

// Eliminar un registro de inventario
const deleteInventario = (req, res) => {
  const { id } = req.params;
  const index = inventarioMock.findIndex(i => i.id_inventario === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Registro de inventario no encontrado'
    });
  }
  
  inventarioMock.splice(index, 1);
  
  res.json({
    success: true,
    message: 'Registro de inventario eliminado exitosamente'
  });
};

module.exports = {
  getAllInventario,
  getInventarioById,
  getInventarioByProducto,
  createInventario,
  updateInventario,
  deleteInventario
};