const itemsPedidoMock = [
  // Pedido 1
  {
    id_item_pedido: 1,
    id_pedido: 1,
    id_producto: 1,
    talla: '42',
    cantidad: 2,
    precio_unitario: 45999.99,
    subtotal: 91999.98
  },
  // Pedido 2
  {
    id_item_pedido: 2,
    id_pedido: 2,
    id_producto: 1,
    talla: '41',
    cantidad: 1,
    precio_unitario: 45999.99,
    subtotal: 45999.99
  },
  // Pedido 3 - múltiples productos
  {
    id_item_pedido: 3,
    id_pedido: 3,
    id_producto: 6,
    talla: '40',
    cantidad: 1,
    precio_unitario: 52999.99,
    subtotal: 52999.99
  },
  {
    id_item_pedido: 4,
    id_pedido: 3,
    id_producto: 11,
    talla: '42',
    cantidad: 2,
    precio_unitario: 28999.99,
    subtotal: 57999.98
  },
  {
    id_item_pedido: 5,
    id_pedido: 3,
    id_producto: 21,
    talla: '41',
    cantidad: 1,
    precio_unitario: 15999.99,
    subtotal: 15999.99
  }
];

module.exports = itemsPedidoMock;