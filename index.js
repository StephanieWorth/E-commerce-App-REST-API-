const express = require('express');
const app = express();
const PORT = 3000;
//require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hi Steph');
});

app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
})
