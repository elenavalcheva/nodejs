const express = require('express');
var path = require('path');
const app = express();
const session = require('express-session');
const passport = require('passport');

app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
  secret: 'x)yLpP9up6a1SI;})L!dEgbT5g[h-2',
  resave: true,
  saveUninitialized: true
}));

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));



const server = require('http').createServer(app);
server.listen(process.env.PORT || 4000 , function(){
  console.log('Server is up!');
});
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'public/about.html'));
});
app.get('/contacts', function(req, res){
  res.sendFile(path.join(__dirname, 'public/contacts.html'));
});
