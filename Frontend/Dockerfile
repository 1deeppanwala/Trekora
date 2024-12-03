# Use Node.js Alpine image as base
FROM node:18-alpine AS external-website

# Metadata
LABEL Developers=""

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml first to optimize caching
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Remove development .env file if present
RUN rm -f .env

# Build SvelteKit app
RUN pnpm run build

# Expose the port that the app is listening on
EXPOSE 3000

# Grant execute permissions to the startup script
RUN chmod +x ./startup.sh

# Run the app
CMD ["./startup.sh"]
