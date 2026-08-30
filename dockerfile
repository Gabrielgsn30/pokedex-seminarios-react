# ==========================================
# Estágio 1: Build da aplicação React
# ==========================================
FROM node:18-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependência primeiro
COPY package*.json ./

RUN npm install

# Copia o restante do código fonte
COPY . .

# Compila o projeto (gera a pasta /app/dist)
RUN npm run build

# ==========================================
# Estágio 2: Servidor Web Nginx
# ==========================================
FROM nginx:alpine

# AJUSTE AQUI: trocado /app/build por /app/dist
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]