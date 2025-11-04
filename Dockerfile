FROM nginx:alpine

# Create a writable temp directory
RUN mkdir -p /tmp/nginx/cache /tmp/nginx/client_temp && \
    chmod -R 777 /tmp/nginx

# Copy your website files to nginx html folder
COPY . /usr/share/nginx/html

# Change Nginx config to use /tmp instead of /var/cache/nginx
RUN sed -i 's|/var/cache/nginx|/tmp/nginx|g' /etc/nginx/nginx.conf

# Expose port 8080 (required by OpenShift)
EXPOSE 8080

# Run nginx without root privileges
USER 1001

CMD ["nginx", "-g", "daemon off;"]
