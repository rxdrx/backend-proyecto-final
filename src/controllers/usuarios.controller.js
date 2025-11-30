const usuariosMock = require('../mocks/usuarios.mock');

// Obtener todos los usuarios
const getAllUsuarios = (req, res) => {
  res.json({
    success: true,
    data: usuariosMock,
    total: usuariosMock.length
  });
};

// Obtener un usuario por ID
const getUsuarioById = (req, res) => {
  const { id } = req.params;
  const usuario = usuariosMock.find(u => u.id_usuario === parseInt(id));
  
  if (!usuario) {
    return res.status(404).json({
      success: false,
      message: 'Usuario no encontrado'
    });
  }
  
  res.json({
    success: true,
    data: usuario
  });
};

// Crear un usuario
const createUsuario = (req, res) => {
  const nuevoUsuario = {
    id_usuario: usuariosMock.length + 1,
    ...req.body,
    fecha_creacion: new Date().toISOString()
  };
  
  usuariosMock.push(nuevoUsuario);
  
  res.status(201).json({
    success: true,
    message: 'Usuario creado exitosamente',
    data: nuevoUsuario
  });
};

// Actualizar un usuario
const updateUsuario = (req, res) => {
  const { id } = req.params;
  const index = usuariosMock.findIndex(u => u.id_usuario === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Usuario no encontrado'
    });
  }
  
  usuariosMock[index] = {
    ...usuariosMock[index],
    ...req.body
  };
  
  res.json({
    success: true,
    message: 'Usuario actualizado exitosamente',
    data: usuariosMock[index]
  });
};

// Eliminar un usuario
const deleteUsuario = (req, res) => {
  const { id } = req.params;
  const index = usuariosMock.findIndex(u => u.id_usuario === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Usuario no encontrado'
    });
  }
  
  usuariosMock.splice(index, 1);
  
  res.json({
    success: true,
    message: 'Usuario eliminado exitosamente'
  });
};

module.exports = {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario
};