# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN echo "Installing dependencies..." && npm ci || echo "npm ci failed"
RUN echo "Installed packages:" && npm list --depth=0
RUN ls -la node_modules

# Copy all source files
COPY . .

# Build the application (if needed, e.g., for frontend)
# Example for a React or similar build:
# RUN npm run build

# Production stage
FROM node:20-alpine

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
CMD ["node", "src/index.js"]