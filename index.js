const express = require('express')
const bodyParser = require("body-parser");
const run = require('./run')

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.end('hello'))
app.post('/deploy', (req, res) => {
  console.log("deploy", req.body);
  run('cd ~/sam/corp-site && git pull').then(console.log).catch(console.log)
  res.end()
})

const port = process.env.PORT || 9090;
app.listen(port);
console.log(`app started at port ${port}`);