FROM node:26-slim

# Instalar dependencias mínimas para que VSCode Server y Git funcionen en una imagen slim
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    ca-certificates \
    curl \
    procps \
    && rm -rf /var/lib/apt/lists/*

# Instalar la última versión de pnpm globalmente mediante npm
RUN npm install -g pnpm@latest

# Usar el usuario sin privilegios incluido en la imagen oficial
USER node

# Configurar el directorio global de paquetes para el usuario node
ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"