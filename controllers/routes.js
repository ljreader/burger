var express = require('express');
var router = espress.Router();

router.get('/', function(req,res){
    res.render('index');
})