# Use an official Node.js LTS (Long Term Support) image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port that the application will listen on
EXPOSE 3000

# Set the command to start the Node.js application
CMD ["npm", "start"]
