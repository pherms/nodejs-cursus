const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const defaultRoute = require('./routes/default');
const usersRoute = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(defaultRoute);
app.use(usersRoute);

app.listen(3000);