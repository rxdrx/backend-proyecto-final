const { Inventario } = require('../models');

// Obtener todo el inventario
const getAllInventario = async (req, res) => {
  try {
    const inventario = await Inventario.findAll();
    
    res.json({
      success: true,
      data: inventario,
      total: inventario.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener inventario',
      error: error.message
    });
  }
};

// Obtener un registro de inventario por ID
const getInventarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const inventario = await Inventario.findByPk(id);
    
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener registro de inventario',
      error: error.message
    });
  }
};

// Obtener inventario por producto
const getInventarioByProducto = async (req, res) => {
  try {
    const { id_producto } = req.params;
    const inventarios = await Inventario.findAll({
      where: { id_producto: parseInt(id_producto) }
    });
    
    res.json({
      success: true,
      data: inventarios,
      total: inventarios.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener inventario por producto',
      error: error.message
    });
  }
};

// Crear un registro de inventario
const createInventario = async (req, res) => {
  try {
    const nuevoInventario = await Inventario.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Registro de inventario creado exitosamente',
      data: nuevoInventario
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear registro de inventario',
      error: error.message
    });
  }
};

// Actualizar un registro de inventario
const updateInventario = async (req, res) => {
  try {
    const { id } = req.params;
    const inventario = await Inventario.findByPk(id);
    
    if (!inventario) {
      return res.status(404).json({
        success: false,
        message: 'Registro de inventario no encontrado'
      });
    }
    
    await inventario.update(req.body);
    
    res.json({
      success: true,
      message: 'Registro de inventario actualizado exitosamente',
      data: inventario
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar registro de inventario',
      error: error.message
    });
  }
};

// Eliminar un registro de inventario
const deleteInventario = async (req, res) => {
  try {
    const { id } = req.params;
    const inventario = await Inventario.findByPk(id);
    
    if (!inventario) {
      return res.status(404).json({
        success: false,
        message: 'Registro de inventario no encontrado'
      });
    }
    
    await inventario.destroy();
    
    res.json({
      success: true,
      message: 'Registro de inventario eliminado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar registro de inventario',
      error: error.message
    });
  }
};

module.exports = {
  getAllInventario,
  getInventarioById,
  getInventarioByProducto,
  createInventario,
  updateInventario,
  deleteInventario
};