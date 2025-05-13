# Build stage
FROM oven/bun:alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies
RUN echo "Installing dependencies..." && bun install --frozen-lockfile
RUN echo "Installed packages:" && bun pm ls
RUN ls -la node_modules

# Copy all source files
COPY . .

# Production stage
FROM oven/bun:alpine

RUN apk add --no-cache curl

WORKDIR /app

# Copy all files from builder including node_modules
COPY --from=builder /app ./

# Create non-privileged user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:${PORT}/health || exit 1

# Run the application
CMD ["bun", "src/index.js"]