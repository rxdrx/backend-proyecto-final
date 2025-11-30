const productosMock = require('../mocks/productos.mock');

// Obtener todos los productos
const getAllProductos = (req, res) => {
  res.json({
    success: true,
    data: productosMock,
    total: productosMock.length
  });
};

// Obtener un producto por ID
const getProductoById = (req, res) => {
  const { id } = req.params;
  const producto = productosMock.find(p => p.id_producto === parseInt(id));
  
  if (!producto) {
    return res.status(404).json({
      success: false,
      message: 'Producto no encontrado'
    });
  }
  
  res.json({
    success: true,
    data: producto
  });
};

// Crear un producto
const createProducto = (req, res) => {
  const nuevoProducto = {
    id_producto: productosMock.length + 1,
    ...req.body
  };
  
  productosMock.push(nuevoProducto);
  
  res.status(201).json({
    success: true,
    message: 'Producto creado exitosamente',
    data: nuevoProducto
  });
};

// Actualizar un producto
const updateProducto = (req, res) => {
  const { id } = req.params;
  const index = productosMock.findIndex(p => p.id_producto === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Producto no encontrado'
    });
  }
  
  productosMock[index] = {
    ...productosMock[index],
    ...req.body
  };
  
  res.json({
    success: true,
    message: 'Producto actualizado exitosamente',
    data: productosMock[index]
  });
};

// Eliminar un producto
const deleteProducto = (req, res) => {
  const { id } = req.params;
  const index = productosMock.findIndex(p => p.id_producto === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Producto no encontrado'
    });
  }
  
  productosMock.splice(index, 1);
  
  res.json({
    success: true,
    message: 'Producto eliminado exitosamente'
  });
};

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};