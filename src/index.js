import express from 'express';
import path from 'path';
let app = express();

app.use(express.static)

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'index.html'))
})

app.get('/bundle.js', (req, res) => {
    res.sendfile(path.join(__dirname, 'bundle.js'))
})