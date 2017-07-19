import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//Hard Code
app.get('/users',function(req,res){
    res.json([
        {"id": 1, "firstName": "Kevin", "lastName": "Huang", "email": "mybaseball52@gmail.com"},
        {"id": 2, "firstName": "Ken", "lastName": "Huang", "email": "yourbaseball52@gmail.com"},
        {"id": 3, "firstName": "Kevin", "lastName": "Hung", "email": "hisbaseball52@gmail.com"}
    ]);
})

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
