const express = require('express')
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post('/deploy', (req, res) => {
  console.log("deploy", req.query.body);
})

const port = process.env.PORT || 3085;
app.listen(port);
console.log(`app started at port ${port}`);