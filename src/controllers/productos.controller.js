const { Producto } = require('../models');
const { Op } = require('sequelize');

// Obtener todos los productos (con filtros opcionales)
const getAllProductos = async (req, res) => {
  try {
    const { categoria, precio_min, precio_max } = req.query;
    
    // Construir filtros dinámicos
    const where = {};
    
    // Filtrar por categoría
    if (categoria) {
      where.id_categoria = parseInt(categoria);
    }
    
    // Filtrar por rango de precios
    if (precio_min || precio_max) {
      where.precio = {};
      if (precio_min) {
        where.precio[Op.gte] = parseFloat(precio_min);
      }
      if (precio_max) {
        where.precio[Op.lte] = parseFloat(precio_max);
      }
    }
    
    const productos = await Producto.findAll({ where });
    
    res.json({
      success: true,
      data: productos,
      total: productos.length,
      filtros_aplicados: {
        categoria: categoria || null,
        precio_min: precio_min || null,
        precio_max: precio_max || null
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener productos',
      error: error.message
    });
  }
};

// Obtener un producto por ID
const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener producto',
      error: error.message
    });
  }
};

// Crear un producto
const createProducto = async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Producto creado exitosamente',
      data: nuevoProducto
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear producto',
      error: error.message
    });
  }
};

// Actualizar un producto
const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    
    if (!producto) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }
    
    await producto.update(req.body);
    
    res.json({
      success: true,
      message: 'Producto actualizado exitosamente',
      data: producto
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar producto',
      error: error.message
    });
  }
};

// Eliminar un producto
const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    
    if (!producto) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }
    
    await producto.destroy();
    
    res.json({
      success: true,
      message: 'Producto eliminado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar producto',
      error: error.message
    });
  }
};

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};