const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/input', (req, res) => {
    res.render('hacked', {
        data: req.query.leak
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})