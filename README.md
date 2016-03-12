# Klouds Front-End Hosting

README inc. in the future.

##Features
* React Framework
* Alt(flux) Template
* Hotloads js, jsx, css, html pages with:
```
cd ./react-flux-template
HOST=0.0.0.0 PORT=8080 npm run start
```
* serves static files in /build with:
```
cd ./react-flux-template
npm run build
```
* serves stats with
```
cd ./react-flux-template
npm run stats
```

## Run the server on Docker

```
cd ./react-alt-template
sudo docker build -t react-alt-template . 

sudo docker run -p 80:8080 -d react-alt-template
```