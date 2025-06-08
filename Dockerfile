# Step 1: Use a lightweight Node.js base image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the application code to the working directory
COPY . .

# Step 5: Build the application
RUN npm run build

# Step 6: Expose the port the app runs on
EXPOSE 3001

# Step 7: Define the command to run the application
CMD ["node", "dist/main.js"]