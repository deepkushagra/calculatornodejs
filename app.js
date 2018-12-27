var express = require('express');
var app = new express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req,res)=>{
    var a = parseInt(req.body.a,10);
    var b = parseInt(req.body.b,10);
    var ans = 0;
    switch(req.body.action) {
        case 'Add' :
        ans = a + b;
        res.send(''+ans);
        console.log(ans);
        break;
        case 'Sub' :
        ans = a - b;
        res.send(''+ans);
        console.log(ans);
        break;
        case 'Mul' :
        ans = a * b;
        res.send(''+ans);
        console.log(ans);
        break;
        case 'Div' :
        ans = a / b;
        res.send(''+ans);
        console.log(ans);
        break;
        default:
        res.send('default');
    }
})
app.listen(8080, ()=>{
    console.log('Server up and running on port 8080');
});