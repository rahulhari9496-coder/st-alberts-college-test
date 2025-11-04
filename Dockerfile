# Step 1: Use Nginx as a web server
FROM nginx:latest

# Step 2: Copy website files to Nginx HTML folder
COPY . /usr/share/nginx/html

# Step 3: Expose port 8080
EXPOSE 8080

# Step 4: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
