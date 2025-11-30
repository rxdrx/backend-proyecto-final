const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas básicas
app.get('/', (req, res) => {
  res.json({
    message: 'API de Tienda de Calzado - Proyecto Final UTN',
    version: '1.0.0',
    status: 'OK'
  });
});

// Rutas de la API 
app.use('/api/productos', require('./src/routes/productos.routes'));
app.use('/api/usuarios', require('./src/routes/usuarios.routes'));
app.use('/api/categorias', require('./src/routes/categorias.routes'));
app.use('/api/inventario', require('./src/routes/inventario.routes'));
app.use('/api/pedidos', require('./src/routes/pedidos.routes'));
app.use('/api/items-pedido', require('./src/routes/items_pedido.routes'));

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    path: req.path
  });
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📍 URL: http://localhost:${PORT}`);
});

module.exports = app;