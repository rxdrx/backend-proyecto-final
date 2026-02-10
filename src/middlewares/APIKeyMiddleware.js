const verificarApiKey = (req, res, next) => {
  // Obtener API_KEY del header de la petición
  const apiKey = req.headers['x-api-key'];

  // Verificar si se proporcionó la API_KEY
  if (!apiKey) {
    return res.status(401).json({
      error: 'API_KEY no proporcionada',
      mensaje: 'Debe incluir el header "x-api-key" en su petición'
    });
  }

  // Comparar con la API_KEY del servidor (variable de entorno)
  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({
      error: 'API_KEY inválida',
      mensaje: 'La API_KEY proporcionada no es válida'
    });
  }

  next();
};

module.exports = verificarApiKey;