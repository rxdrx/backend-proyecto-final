const pedidosMock = [
  {
    id_pedido: 1,
    id_usuario: 1,
    monto_total: 91999.98,
    estado: 'entregado',
    calle: 'San Martin',
    ciudad: 'Bahía Blanca',
    provincia: 'Buenos Aires',
    codigo_postal: '8000',
    pais: 'Argentina',
    metodo_pago: 'tarjeta',
    fecha_pedido: '2024-10-15T14:30:00Z',
    fecha_actualizacion: '2024-10-20T10:00:00Z'
  },
  {
    id_pedido: 2,
    id_usuario: 1,
    monto_total: 45999.99,
    estado: 'en_proceso',
    calle: 'San Martin',
    ciudad: 'Bahía Blanca',
    provincia: 'Buenos Aires',
    codigo_postal: '8000',
    pais: 'Argentina',
    metodo_pago: 'mercado_pago',
    fecha_pedido: '2024-11-20T16:45:00Z',
    fecha_actualizacion: '2024-11-20T16:45:00Z'
  },
  {
    id_pedido: 3,
    id_usuario: 2,
    monto_total: 129999.97,
    estado: 'pendiente',
    calle: 'Alem 1250',
    ciudad: 'Bahía Blanca',
    provincia: 'Buenos Aires',
    codigo_postal: '8000',
    pais: 'Argentina',
    metodo_pago: 'transferencia',
    fecha_pedido: '2024-11-28T09:20:00Z',
    fecha_actualizacion: '2024-11-28T09:20:00Z'
  }
];

module.exports = pedidosMock;