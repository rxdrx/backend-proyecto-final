const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Inventario = sequelize.define('inventario_productos', {
  id_inventario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'productos',
      key: 'id_producto'
    }
  },
  talla: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  cantidad_stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  fecha_actualizacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true,
  createdAt: false,
  updatedAt: 'fecha_actualizacion'
});

module.exports = Inventario;