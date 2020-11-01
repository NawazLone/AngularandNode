//const http= require('http');
const express = require('express')
const employeedata=require('./logger');
const cors = require('cors')
const app = express()
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

console.log(employeedata);
employeedata.forEach(element => {
    console.log(element.Name);
});

app.listen(8080, () => {
    console.log('Server started!')
  })
  app.route('/api/services').get((req, res) => {
      //res.write('data');
      res.send(JSON.stringify(employeedata));
  });
  app.route('/').get((req,res)=>{
      res.send("Welcome TO Express");

  });
/*const server=http.createServer((req,res)=>{
  console.log('New Connection Registered');
  if(req.url ==='/'){
      res.send("hello World");
      res.end();
  }
  if(req.url==='/api/services'){
      res.write(JSON.stringify(employeedata));
      res.end();
  }
    
});
server.listen(8080);
console.log("listening on port 8000....");*/