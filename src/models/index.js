const { sequelize } = require('../config/database');

const Usuario = require('./Usuario');
const Categoria = require('./Categoria');
const Producto = require('./Producto');
const Inventario = require('./Inventario');
const Pedido = require('./Pedido');
const ItemPedido = require('./ItemPedido');

// -------------------- RELACIONES --------------------

// Categoria - Producto (1:N)
Categoria.hasMany(Producto, {
  foreignKey: 'id_categoria',
  as: 'productos'
});
Producto.belongsTo(Categoria, {
  foreignKey: 'id_categoria',
  as: 'categoria'
});

// Producto - Inventario (1:N)
Producto.hasMany(Inventario, {
  foreignKey: 'id_producto',
  as: 'inventarios'
});
Inventario.belongsTo(Producto, {
  foreignKey: 'id_producto',
  as: 'producto'
});

// Usuario - Pedido (1:N)
Usuario.hasMany(Pedido, {
  foreignKey: 'id_usuario',
  as: 'pedidos'
});
Pedido.belongsTo(Usuario, {
  foreignKey: 'id_usuario',
  as: 'usuario'
});

// Pedido - ItemPedido (1:N)
Pedido.hasMany(ItemPedido, {
  foreignKey: 'id_pedido',
  as: 'items'
});
ItemPedido.belongsTo(Pedido, {
  foreignKey: 'id_pedido',
  as: 'pedido'
});

// Producto - ItemPedido (1:N)
Producto.hasMany(ItemPedido, {
  foreignKey: 'id_producto',
  as: 'items_pedido'
});
ItemPedido.belongsTo(Producto, {
  foreignKey: 'id_producto',
  as: 'producto'
});

// Exportar modelos y sequelize
module.exports = {
  sequelize,
  Usuario,
  Categoria,
  Producto,
  Inventario,
  Pedido,
  ItemPedido
};