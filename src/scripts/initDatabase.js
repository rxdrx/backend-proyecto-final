const { sequelize } = require('../config/database');
const {
  Usuario,
  Categoria,
  Producto,
  Inventario,
  Pedido,
  ItemPedido
} = require('../models');

const initDatabase = async () => {
  try {
    console.log('Creando base de datos...');
    
    // Probar la conexión
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');
    
    // Sincronizar modelos (crear tablas)
    await sequelize.sync({ force: true });
    console.log('Tablas creadas correctamente.');
    
    console.log('\n Estructura de la base de datos:');
    console.log('  - usuarios');
    console.log('  - categorias');
    console.log('  - productos');
    console.log('  - inventario_productos');
    console.log('  - pedidos');
    console.log('  - items_pedido');
    
    console.log('\n Base de datos inicializada correctamente');
    console.log('Ejecutar "npm run db:seed" para poblar la base de datos con datos iniciales.');
    
    process.exit(0);
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    process.exit(1);
  }
};

// Ejecutar si se llama directamente
if (require.main === module) {
  initDatabase();
}

module.exports = initDatabase;