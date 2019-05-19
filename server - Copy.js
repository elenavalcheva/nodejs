const express = require('express');
var path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'public/about.html'));
});
app.get('/contacts', function(req, res){
  res.sendFile(path.join(__dirname, 'public/contacts.html'));
});



const server = require('http').createServer(app);
server.listen(process.env.PORT || 4000 , function(){
  console.log('Server is up!');
});
