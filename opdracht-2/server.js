const express = require('express');
const http = require('http');

const app = express();

app.use('/user', (req, res) => {
    res.send("User middleware");
});

app.use('/', (req, res) => {
    res.send("All other routes");
});

const server = http.createServer(app);

server.listen(8080);