# Etapa 1: Construcción
FROM node:18 AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente para construir la aplicación
COPY . .

# Construye la aplicación (asumiendo que 'npm run build' existe en tu proyecto)
RUN npm run build

# Etapa 2: Ejecución
FROM node:18-alpine AS runner

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos construidos desde la etapa de construcción
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Instala un servidor estático para servir la aplicación
RUN npm install -g serve

# Exponer el puerto que utilizará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación en modo producción
CMD ["serve", "-s", "dist", "-l", "3000"]
