const {
  Usuario,
  Categoria,
  Producto,
  Inventario,
  Pedido,
  ItemPedido
} = require('../models');

// Importar datos mock
const usuariosMock = require('../mocks/usuarios.mock');
const categoriasMock = require('../mocks/categorias.mock');
const productosMock = require('../mocks/productos.mock');
const inventarioMock = require('../mocks/inventario.mock');
const pedidosMock = require('../mocks/pedidos.mock');
const itemsPedidoMock = require('../mocks/items_pedido.mock');

const seedDatabase = async () => {
  try {
    console.log('Iniciando población de la base de datos...\n');

    // 1. Insertar Usuarios
    console.log('Insertando usuarios...');
    await Usuario.bulkCreate(usuariosMock);
    console.log(`${usuariosMock.length} usuarios insertados.`);

    // 2. Insertar Categorías
    console.log('Insertando categorías...');
    await Categoria.bulkCreate(categoriasMock);
    console.log(`${categoriasMock.length} categorías insertadas.`);

    // 3. Insertar Productos
    console.log('Insertando productos...');
    await Producto.bulkCreate(productosMock);
    console.log(`${productosMock.length} productos insertados.`);

    // 4. Insertar Inventario
    console.log('Insertando inventario...');
    await Inventario.bulkCreate(inventarioMock);
    console.log(`${inventarioMock.length} registros de inventario insertados.`);

    // 5. Insertar Pedidos
    console.log('Insertando pedidos...');
    await Pedido.bulkCreate(pedidosMock);
    console.log(`${pedidosMock.length} pedidos insertados.`);

    // 6. Insertar Items de Pedido
    console.log('Insertando items de pedido...');
    await ItemPedido.bulkCreate(itemsPedidoMock);
    console.log(`${itemsPedidoMock.length} items de pedido insertados.`);

    console.log('\n Base de datos poblada exitosamente!');
    console.log('\n Resumen:');
    console.log(`  - Usuarios: ${usuariosMock.length}`);
    console.log(`  - Categorías: ${categoriasMock.length}`);
    console.log(`  - Productos: ${productosMock.length}`);
    console.log(`  - Inventario: ${inventarioMock.length}`);
    console.log(`  - Pedidos: ${pedidosMock.length}`);
    console.log(`  - Items de pedido: ${itemsPedidoMock.length}`);

    process.exit(0);
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1);
  }
};

// Ejecutar si se llama directamente
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;