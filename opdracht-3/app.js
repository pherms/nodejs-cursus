const express = require('express');
const http = require('http');
const path = require('path');

const defaultRoutes = require('./routes/default');
const userRoutes = require('./routes/user');

const staticContent = express.static(path.join(__dirname, 'public'));

const app = express();

app.use(staticContent);
app.use(userRoutes);
app.use(defaultRoutes);

const server = http.createServer(app);

server.listen(8080);