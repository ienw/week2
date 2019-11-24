'use strict';
const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./week2_public_html'))

app.use(cors());

const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute')

app.use('/cat', catRoute);
app.use('/user', userRoute);

app.use('/', (req, res) => {
  res.sendFile('./week2_public_html/index.html');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
