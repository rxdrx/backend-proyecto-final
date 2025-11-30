const inventarioMock = [
  // Nike Air Max 270
  { id_inventario: 1, id_producto: 1, talla: '39', cantidad_stock: 15 },
  { id_inventario: 2, id_producto: 1, talla: '40', cantidad_stock: 20 },
  { id_inventario: 3, id_producto: 1, talla: '41', cantidad_stock: 18 },
  { id_inventario: 4, id_producto: 1, talla: '42', cantidad_stock: 25 },
  { id_inventario: 5, id_producto: 1, talla: '43', cantidad_stock: 12 },
  
  // Nike Revolution 6
  { id_inventario: 6, id_producto: 2, talla: '39', cantidad_stock: 22 },
  { id_inventario: 7, id_producto: 2, talla: '40', cantidad_stock: 30 },
  { id_inventario: 8, id_producto: 2, talla: '41', cantidad_stock: 28 },
  { id_inventario: 9, id_producto: 2, talla: '42', cantidad_stock: 25 },
  { id_inventario: 10, id_producto: 2, talla: '43', cantidad_stock: 20 },
  
  // Nike Air Force 1
  { id_inventario: 11, id_producto: 3, talla: '39', cantidad_stock: 18 },
  { id_inventario: 12, id_producto: 3, talla: '40', cantidad_stock: 24 },
  { id_inventario: 13, id_producto: 3, talla: '41', cantidad_stock: 22 },
  { id_inventario: 14, id_producto: 3, talla: '42', cantidad_stock: 20 },
  { id_inventario: 15, id_producto: 3, talla: '43', cantidad_stock: 15 },
  
  // Nike Pegasus 40
  { id_inventario: 16, id_producto: 4, talla: '39', cantidad_stock: 12 },
  { id_inventario: 17, id_producto: 4, talla: '40', cantidad_stock: 16 },
  { id_inventario: 18, id_producto: 4, talla: '41', cantidad_stock: 20 },
  { id_inventario: 19, id_producto: 4, talla: '42', cantidad_stock: 18 },
  { id_inventario: 20, id_producto: 4, talla: '43', cantidad_stock: 14 },
  
  // Nike Court Vision Low
  { id_inventario: 21, id_producto: 5, talla: '39', cantidad_stock: 25 },
  { id_inventario: 22, id_producto: 5, talla: '40', cantidad_stock: 30 },
  { id_inventario: 23, id_producto: 5, talla: '41', cantidad_stock: 28 },
  { id_inventario: 24, id_producto: 5, talla: '42', cantidad_stock: 22 },
  { id_inventario: 25, id_producto: 5, talla: '43', cantidad_stock: 18 },
  
  // Adidas Ultraboost 22
  { id_inventario: 26, id_producto: 6, talla: '39', cantidad_stock: 10 },
  { id_inventario: 27, id_producto: 6, talla: '40', cantidad_stock: 15 },
  { id_inventario: 28, id_producto: 6, talla: '41', cantidad_stock: 20 },
  { id_inventario: 29, id_producto: 6, talla: '42', cantidad_stock: 18 },
  { id_inventario: 30, id_producto: 6, talla: '43', cantidad_stock: 12 },
  
  // Adidas Stan Smith
  { id_inventario: 31, id_producto: 7, talla: '39', cantidad_stock: 20 },
  { id_inventario: 32, id_producto: 7, talla: '40', cantidad_stock: 25 },
  { id_inventario: 33, id_producto: 7, talla: '41', cantidad_stock: 30 },
  { id_inventario: 34, id_producto: 7, talla: '42', cantidad_stock: 28 },
  { id_inventario: 35, id_producto: 7, talla: '43', cantidad_stock: 22 },
  
  // Adidas Superstar
  { id_inventario: 36, id_producto: 8, talla: '39', cantidad_stock: 18 },
  { id_inventario: 37, id_producto: 8, talla: '40', cantidad_stock: 22 },
  { id_inventario: 38, id_producto: 8, talla: '41', cantidad_stock: 25 },
  { id_inventario: 39, id_producto: 8, talla: '42', cantidad_stock: 20 },
  { id_inventario: 40, id_producto: 8, talla: '43', cantidad_stock: 15 },
  
  // Adidas Predator Edge
  { id_inventario: 41, id_producto: 9, talla: '39', cantidad_stock: 8 },
  { id_inventario: 42, id_producto: 9, talla: '40', cantidad_stock: 12 },
  { id_inventario: 43, id_producto: 9, talla: '41', cantidad_stock: 15 },
  { id_inventario: 44, id_producto: 9, talla: '42', cantidad_stock: 14 },
  { id_inventario: 45, id_producto: 9, talla: '43', cantidad_stock: 10 },
  
  // Adidas Forum Low
  { id_inventario: 46, id_producto: 10, talla: '39', cantidad_stock: 16 },
  { id_inventario: 47, id_producto: 10, talla: '40', cantidad_stock: 20 },
  { id_inventario: 48, id_producto: 10, talla: '41', cantidad_stock: 22 },
  { id_inventario: 49, id_producto: 10, talla: '42', cantidad_stock: 18 },
  { id_inventario: 50, id_producto: 10, talla: '43', cantidad_stock: 14 },
  
  // Puma Suede Classic
  { id_inventario: 51, id_producto: 11, talla: '39', cantidad_stock: 25 },
  { id_inventario: 52, id_producto: 11, talla: '40', cantidad_stock: 30 },
  { id_inventario: 53, id_producto: 11, talla: '41', cantidad_stock: 28 },
  { id_inventario: 54, id_producto: 11, talla: '42', cantidad_stock: 24 },
  { id_inventario: 55, id_producto: 11, talla: '43', cantidad_stock: 20 },
  
  // Puma RS-X
  { id_inventario: 56, id_producto: 12, talla: '39', cantidad_stock: 15 },
  { id_inventario: 57, id_producto: 12, talla: '40', cantidad_stock: 20 },
  { id_inventario: 58, id_producto: 12, talla: '41', cantidad_stock: 22 },
  { id_inventario: 59, id_producto: 12, talla: '42', cantidad_stock: 18 },
  { id_inventario: 60, id_producto: 12, talla: '43', cantidad_stock: 14 },
  
  // Puma Future Rider
  { id_inventario: 61, id_producto: 13, talla: '39', cantidad_stock: 20 },
  { id_inventario: 62, id_producto: 13, talla: '40', cantidad_stock: 25 },
  { id_inventario: 63, id_producto: 13, talla: '41', cantidad_stock: 22 },
  { id_inventario: 64, id_producto: 13, talla: '42', cantidad_stock: 20 },
  { id_inventario: 65, id_producto: 13, talla: '43', cantidad_stock: 16 },
  
  // Puma Velocity Nitro
  { id_inventario: 66, id_producto: 14, talla: '39', cantidad_stock: 12 },
  { id_inventario: 67, id_producto: 14, talla: '40', cantidad_stock: 16 },
  { id_inventario: 68, id_producto: 14, talla: '41', cantidad_stock: 18 },
  { id_inventario: 69, id_producto: 14, talla: '42', cantidad_stock: 15 },
  { id_inventario: 70, id_producto: 14, talla: '43', cantidad_stock: 12 },
  
  // Puma Cali Sport
  { id_inventario: 71, id_producto: 15, talla: '39', cantidad_stock: 22 },
  { id_inventario: 72, id_producto: 15, talla: '40', cantidad_stock: 26 },
  { id_inventario: 73, id_producto: 15, talla: '41', cantidad_stock: 24 },
  { id_inventario: 74, id_producto: 15, talla: '42', cantidad_stock: 20 },
  { id_inventario: 75, id_producto: 15, talla: '43', cantidad_stock: 16 },
  
  // Topper Volt
  { id_inventario: 76, id_producto: 16, talla: '39', cantidad_stock: 30 },
  { id_inventario: 77, id_producto: 16, talla: '40', cantidad_stock: 35 },
  { id_inventario: 78, id_producto: 16, talla: '41', cantidad_stock: 32 },
  { id_inventario: 79, id_producto: 16, talla: '42', cantidad_stock: 28 },
  { id_inventario: 80, id_producto: 16, talla: '43', cantidad_stock: 25 },
  
  // Topper Tie Break III
  { id_inventario: 81, id_producto: 17, talla: '39', cantidad_stock: 28 },
  { id_inventario: 82, id_producto: 17, talla: '40', cantidad_stock: 32 },
  { id_inventario: 83, id_producto: 17, talla: '41', cantidad_stock: 30 },
  { id_inventario: 84, id_producto: 17, talla: '42', cantidad_stock: 26 },
  { id_inventario: 85, id_producto: 17, talla: '43', cantidad_stock: 22 },
  
  // Topper Sparta II
  { id_inventario: 86, id_producto: 18, talla: '39', cantidad_stock: 20 },
  { id_inventario: 87, id_producto: 18, talla: '40', cantidad_stock: 24 },
  { id_inventario: 88, id_producto: 18, talla: '41', cantidad_stock: 26 },
  { id_inventario: 89, id_producto: 18, talla: '42', cantidad_stock: 22 },
  { id_inventario: 90, id_producto: 18, talla: '43', cantidad_stock: 18 },
  
  // Topper Move II
  { id_inventario: 91, id_producto: 19, talla: '39', cantidad_stock: 35 },
  { id_inventario: 92, id_producto: 19, talla: '40', cantidad_stock: 40 },
  { id_inventario: 93, id_producto: 19, talla: '41', cantidad_stock: 38 },
  { id_inventario: 94, id_producto: 19, talla: '42', cantidad_stock: 32 },
  { id_inventario: 95, id_producto: 19, talla: '43', cantidad_stock: 28 },
  
  // Topper Casual IV
  { id_inventario: 96, id_producto: 20, talla: '39', cantidad_stock: 26 },
  { id_inventario: 97, id_producto: 20, talla: '40', cantidad_stock: 30 },
  { id_inventario: 98, id_producto: 20, talla: '41', cantidad_stock: 28 },
  { id_inventario: 99, id_producto: 20, talla: '42', cantidad_stock: 24 },
  { id_inventario: 100, id_producto: 20, talla: '43', cantidad_stock: 20 },
  
  // Reef Fanning
  { id_inventario: 101, id_producto: 21, talla: '39', cantidad_stock: 18 },
  { id_inventario: 102, id_producto: 21, talla: '40', cantidad_stock: 22 },
  { id_inventario: 103, id_producto: 21, talla: '41', cantidad_stock: 20 },
  { id_inventario: 104, id_producto: 21, talla: '42', cantidad_stock: 18 },
  { id_inventario: 105, id_producto: 21, talla: '43', cantidad_stock: 15 },
  
  // Reef Voyage
  { id_inventario: 106, id_producto: 22, talla: '39', cantidad_stock: 16 },
  { id_inventario: 107, id_producto: 22, talla: '40', cantidad_stock: 20 },
  { id_inventario: 108, id_producto: 22, talla: '41', cantidad_stock: 18 },
  { id_inventario: 109, id_producto: 22, talla: '42', cantidad_stock: 16 },
  { id_inventario: 110, id_producto: 22, talla: '43', cantidad_stock: 14 },
  
  // Reef Cushion Phantom
  { id_inventario: 111, id_producto: 23, talla: '39', cantidad_stock: 24 },
  { id_inventario: 112, id_producto: 23, talla: '40', cantidad_stock: 28 },
  { id_inventario: 113, id_producto: 23, talla: '41', cantidad_stock: 26 },
  { id_inventario: 114, id_producto: 23, talla: '42', cantidad_stock: 22 },
  { id_inventario: 115, id_producto: 23, talla: '43', cantidad_stock: 18 },
  // Reef X-S-1
  { id_inventario: 116, id_producto: 24, talla: '39', cantidad_stock: 20 },
  { id_inventario: 117, id_producto: 24, talla: '40', cantidad_stock: 24 },
  { id_inventario: 118, id_producto: 24, talla: '41', cantidad_stock: 22 },
  { id_inventario: 119, id_producto: 24, talla: '42', cantidad_stock: 20 },
  { id_inventario: 120, id_producto: 24, talla: '43', cantidad_stock: 16 },
  // Reef Newport
  { id_inventario: 121, id_producto: 25, talla: '39', cantidad_stock: 30 },
  { id_inventario: 122, id_producto: 25, talla: '40', cantidad_stock: 34 },
  { id_inventario: 123, id_producto: 25, talla: '41', cantidad_stock: 32 },
  { id_inventario: 124, id_producto: 25, talla: '42', cantidad_stock: 28 },
  { id_inventario: 125, id_producto: 25, talla: '43', cantidad_stock: 24 }
];


module.exports = inventarioMock;