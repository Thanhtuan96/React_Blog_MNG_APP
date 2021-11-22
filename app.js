const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello world12');
});

app.listen(port, () => {
    console.log(`listening from port: ${port}`);
});
