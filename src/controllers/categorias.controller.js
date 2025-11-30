const categoriasMock = require('../mocks/categorias.mock');

// Obtener todas las categorías
const getAllCategorias = (req, res) => {
  res.json({
    success: true,
    data: categoriasMock,
    total: categoriasMock.length
  });
};

// Obtener una categoría por ID
const getCategoriaById = (req, res) => {
  const { id } = req.params;
  const categoria = categoriasMock.find(c => c.id_categoria === parseInt(id));
  
  if (!categoria) {
    return res.status(404).json({
      success: false,
      message: 'Categoría no encontrada'
    });
  }
  
  res.json({
    success: true,
    data: categoria
  });
};

// Crear una categoría
const createCategoria = (req, res) => {
  const nuevaCategoria = {
    id_categoria: categoriasMock.length + 1,
    ...req.body
  };
  
  categoriasMock.push(nuevaCategoria);
  
  res.status(201).json({
    success: true,
    message: 'Categoría creada exitosamente',
    data: nuevaCategoria
  });
};

// Actualizar una categoría
const updateCategoria = (req, res) => {
  const { id } = req.params;
  const index = categoriasMock.findIndex(c => c.id_categoria === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Categoría no encontrada'
    });
  }
  
  categoriasMock[index] = {
    ...categoriasMock[index],
    ...req.body
  };
  
  res.json({
    success: true,
    message: 'Categoría actualizada exitosamente',
    data: categoriasMock[index]
  });
};

// Eliminar una categoría
const deleteCategoria = (req, res) => {
  const { id } = req.params;
  const index = categoriasMock.findIndex(c => c.id_categoria === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Categoría no encontrada'
    });
  }
  
  categoriasMock.splice(index, 1);
  
  res.json({
    success: true,
    message: 'Categoría eliminada exitosamente'
  });
};

module.exports = {
  getAllCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria
};