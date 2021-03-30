const cookieParser = require('cookie-parser')
const express = require('express')
const { error404Handler, errorHandler, logHandler } = require('./middleware')
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

app.use(logHandler);
app.use('/v1', routes);

app.use(error404Handler);
app.use(errorHandler);


module.exports = app