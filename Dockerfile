# Use an official Nginx runtime as the base image
FROM nginx:stable-alpine

# Copy the build output to the Nginx document root
COPY dist/ /usr/share/nginx/html

# Make port 80 available to the outside world
EXPOSE 80

# Start Nginx when the container is run
CMD ["nginx", "-g", "daemon off;"]