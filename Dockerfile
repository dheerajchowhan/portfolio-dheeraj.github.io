# =====================================
# PRODUCTION DOCKERFILE
# =====================================

# Stage 1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
# This layer is cached if package files don't change
COPY package.json package-lock.json ./
RUN npm ci --only=null

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the app with a lightweight Nginx server
FROM nginx:alpine

# Copy the build output to Nginx's default public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx in foreground so Docker can track the process properly
CMD ["nginx", "-g", "daemon off;"]

# =====================================
# INSTRUCTIONS:
# =====================================
# Build the production image:
#   docker build -t portfolio:prod -f DockerFile .
#
# Run the production container:
#   docker run -d -p 80:80 --name portfolio-prod portfolio:prod
#
# For development mode, use docker-compose:
#   docker-compose up --build
