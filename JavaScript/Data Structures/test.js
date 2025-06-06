server {                                                                                         
    server_name isqed.com www.isqed.com;                                                 
    root /var/www/isQED;                                                             
    location / {                                                                                 
        proxy_pass http://172.31.9.105:8000;                                                    
        proxy_http_version 1.1;                                                                  
        proxy_set_header Upgrade $http_upgrade;                                                  
        proxy_set_header Connection 'upgrade';                                                   
        proxy_set_header Host $host;                                                             
        proxy_cache_bypass $http_upgrade;                                                        
    }                                                                                            
                                                                                                 
    listen 443 ssl; # managed by Certbot                                                         
    ssl_certificate /etc/letsencrypt/live/tychenews.net/fullchain.pem; # managed by Certbot      
    ssl_certificate_key /etc/letsencrypt/live/tychenews.net/privkey.pem; # managed by Certbot
    ssl_trusted_certificate /etc/letsencrypt/live/tychenews.net/chain.pem;    
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot                        
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot 

    # reduce the data that needs to be sent over network -- for testing environment
    gzip on;
    # gzip_static on;
    gzip_min_length 10240;
    gzip_comp_level 1;
    gzip_vary on;
    gzip_disable msie6;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types
        # text/html is always compressed by HttpGzipModule
        text/css
        text/javascript
        text/xml
        text/plain
        text/x-component
        application/javascript
        application/x-javascript
        application/json
        application/xml
        application/rss+xml
        application/atom+xml
        font/truetype
        font/opentype
        application/vnd.ms-fontobject
        image/svg+xml;                                                                                                         
}                                                                                                
server {                                                                                         
    if ($host = www.tychenews.net) {                                                             
        return 301 https://$host$request_uri;                                                    
    } # managed by Certbot                                                                       
                                                                                                 
    if ($host = tychenews.net) {                                                                 
        return 301 https://$host$request_uri;                                                    
    } # managed by Certbot                                                                       
                                                                                                 
    listen 80;                                                                                   
    server_name tychenews.net www.tychenews.net;                                                 
    return 404; # managed by Certbot                                                                                                                                                                                                                                                      
}          

