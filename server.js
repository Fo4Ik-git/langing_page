const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/contact', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data);
});

app.use(express.static('dist/demo'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/demo/browser/index.html');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});