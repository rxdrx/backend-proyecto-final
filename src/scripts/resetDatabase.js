const initDatabase = require('./initDatabase');
const seedDatabase = require('./seedDatabase');

const resetDatabase = async () => {
  try {
    console.log('Reiniciando base de datos...\n');
    
    // Primero inicializar (crear tablas)
    await initDatabase();
    
    // Luego poblar con datos
    await seedDatabase();
    
    console.log('\n Base de datos reiniciada correctamente!');
    process.exit(0);
  } catch (error) {
    console.error('Error al reiniciar la base de datos:', error);
    process.exit(1);
  }
};

// Ejecutar
resetDatabase();