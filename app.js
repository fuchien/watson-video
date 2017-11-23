const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const defaultJson = require('./config/default.json')

const port = process.env.PORT || 3001
const app = express()

app.use(express.static(path.join(__dirname, 'angular4-src/dist')))
app.use("/audios", express.static(path.join(__dirname, 'audios')));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', require('./routes'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'angular4-src/dist/index.html'))
})

app.listen(port, () => {
    console.log('Server running on port ' + port)
})