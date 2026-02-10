# Backend - Plataforma online de venta de calzado

## Descripción

Este repositorio contiene la API REST que maneja permitirá la manipulación de datos del proyecto cuando sea consumida por el frontend. Para más detalles ver la documentación técnica.

**Integrantes Grupo 10:** Bucci Simón, Sisko Rodrigo, Zanconi Gianluca

## Instalación

### Requisitos previos

- Node.js (v14 o superior)
- npm o yarn

### Pasos de instalación

1. Situarse en el escitorio o carpeta donde vaya a estar el proyecto y abrir una terminal ahí

2. Clonar el repositorio:
```bash
git clone https://github.com/rxdrx/backend-proyecto-final
cd backend-proyecto-final
```

3. Instalar dependencias:
```bash
npm install
```

4. Configurar variables de entorno (esto crea un archivo .env con los datos de .env.example):
```bash
cp .env.example .env
```

5. Iniciar la base de datos
```bash
npm run db:init
```

6. Agregar datos a la base de datos
```bash
npm run db:seed
``` 

7. Iniciar el servidor:

**Modo desarrollo:**
```bash
npm run dev
```

**Modo producción:**
```bash
npm start
```

8. Reiniciar base de datos (opcional en caso de algun problema)
```bash
npm run db:reset
```

## Uso

El servidor se ejecutará en `http://localhost:3000` (por defecto)

### URL de producción

<https://backend-proyecto-final-eep7.onrender.com/>

