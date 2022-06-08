
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
require("./mongooseConnect/db");

//middleware
app.use(express.json());
app.use(require("./router/router"));


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))