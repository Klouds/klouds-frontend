# Klouds Front-End Hosting

README inc. in the future.

##Features
* React Framework
* Alt(flux) Template
* Hotloads js, jsx, css, html pages with:
```
cd ./klouds-frontend
HOST=0.0.0.0 PORT=8080 npm run start
```
* serves static files in /build with:
```
cd ./klouds-frontend
npm run build
```
* serves stats with
```
cd ./klouds-frontend
npm run stats
```

## Run the server on Docker

```
cd ./klouds-frontend
sudo docker build -t klouds-frontend . 

sudo docker run -p 80:8080 -d klouds-frontend
```