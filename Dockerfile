# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose a port (change 3000 to your desired port if needed)
EXPOSE 3000

# Start the server
CMD ["node", "app.js"]
