FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port
EXPOSE 5000

# Start server
CMD ["npm", "start"]

