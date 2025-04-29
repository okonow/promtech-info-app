# Build stage
FROM oven/bun:latest-alpine AS builder

# Установка рабочей директории
WORKDIR /app

# Копируем только файлы, необходимые для установки зависимостей
COPY package.json bun.lockb ./

# Установка зависимостей
RUN bun install --frozen-lockfile

# Production stage
FROM oven/bun:latest-alpine

# Установка curl для healthcheck
RUN apk add --no-cache curl

WORKDIR /app

# Копируем зависимости из builder stage
COPY --from=builder /app/node_modules ./node_modules

# Копируем исходный код
COPY src ./src
COPY package.json bun.lockb ./

# Создаем непривилегированного пользователя чтобы злоумышленник не смог получить полный доступ к контейнеру
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

# Определяем переменные окружения
ENV NODE_ENV=production
ENV PORT=3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:${PORT}/health || exit 1

# Запуск приложения
CMD ["bun", "src/index.js"] 