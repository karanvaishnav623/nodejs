var express=require('express');

var app=express();
app.set('view engine','jade');
app.get('/',function(req,res)
{
    res.end('got it!');
});
var server=app.listen(3000,function()
{
});