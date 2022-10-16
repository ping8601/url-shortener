# url-shortener

A url shortener website built with Node.js and Express. It allows the users to generate shortened url.

## Features
* Users can generate shortened url with an input url.
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/107028314/196026659-b8b5f391-cce3-4df5-80a1-0b05bb51b759.png">
* Users can copy the shortened url.
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/107028314/196026676-613c6f72-f9a6-4a93-befc-d8db1790e0a9.png">
* Users can view all the urls generated previously and search for the url they want.
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/107028314/196026472-05efc598-1661-4a3e-92d6-6117e3f3a3af.png">

# Getting Started

## Environment
* Node.js 16.17.0 
* npm 8.15.0
* MongoDB 

## Installation
1. Open the Terminal and clone the repo
```bash
git clone https://github.com/ping8601/url-shortener/
```
2. Use the Terminal to open the folder of the project
```bash
cd url-shortener
```
3. Install all the needed package with npm
```bash
npm install
```
4. Set MONGODB_URI as a environment variable for MongoBD connection
```bash
export MONGODB_URI="Your MongoDB connection URL"
```
5. Start the server
```bash
npm run start
```
7. If you see this message, the server is successfully started
```bash
Express is now listening on localhost:3000
```
8. Open your brower and enter the link http://localhost:3000 to start exploring the website!
9. Press control + c to end the server

# Development Tools
* Node.js 16.7.0
* Express 4.16.4
* Express-Handlebars 3.0.0
* Bootstrap 5.1.0
* Font-awesome 5.8.1
* mongoose 5.9.7
