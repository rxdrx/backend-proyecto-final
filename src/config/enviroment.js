require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // URL del frontend
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173'
};