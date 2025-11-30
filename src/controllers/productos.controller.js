const productosMock = require('../mocks/productos.mock');

// Obtener todos los productos (con filtros opcionales)
const getAllProductos = (req, res) => {
  const { categoria, precio_min, precio_max } = req.query;
  
  let productosFiltrados = [...productosMock];
  
  // Filtrar por categoría
  if (categoria) {
    productosFiltrados = productosFiltrados.filter(
      p => p.id_categoria === parseInt(categoria)
    );
  }
  
  // Filtrar por precio mínimo
  if (precio_min) {
    productosFiltrados = productosFiltrados.filter(
      p => p.precio >= parseFloat(precio_min)
    );
  }
  
  // Filtrar por precio máximo
  if (precio_max) {
    productosFiltrados = productosFiltrados.filter(
      p => p.precio <= parseFloat(precio_max)
    );
  }
  
  res.json({
    success: true,
    data: productosFiltrados,
    total: productosFiltrados.length,
    filtros_aplicados: {
      categoria: categoria || null,
      precio_min: precio_min || null,
      precio_max: precio_max || null
    }
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