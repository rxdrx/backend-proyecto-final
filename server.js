const express = require('express');
const cors = require('cors');
require('dotenv').config();
const verificarApiKey = require('./src/middlewares/APIKeyMiddleware');

// Importar configuración de base de datos
const { testConnection, syncDatabase } = require('./src/config/database');

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
    status: 'OK',
    database: 'SQLite3 + Sequelize'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Aplicar middleware de API_key
app.use('/api', verificarApiKey);

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

// Función para iniciar el servidor
const startServer = async () => {
  try {
    console.log('🔄 Iniciando servidor...\n');
    
    // 1. Probar conexión a la base de datos
    await testConnection();
    
    // 2. Sincronizar modelos con la base de datos
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    console.log('✅ Usando base de datos existente (sin modificar estructura)');
    await syncDatabase({ force: false });
    
    // 3. Iniciar servidor Express
    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () => {
      console.log('\n✅ Servidor iniciado correctamente!');
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
      console.log(`🔗 URL: http://localhost:${PORT}`);
      console.log(`💾 Base de datos: SQLite3 (database.sqlite)`);
      console.log(`\n📝 Presiona CTRL+C para detener el servidor\n`);
    });
    
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

// Iniciar servidor
startServer();

module.exports = app;