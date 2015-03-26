var express = require('express');
var router = express.Router();

var url = require('url');
var http = require('http');

/* Calculator page*/
router.get('/', function (req, res, next) {

    //get the querystring
    var query = url.parse(req.url, true).query;
    
    //pull the variables from the url 
    req.query.x;
    
    req.query.y;

    //get the first number and convert it to an interger
    var x = query.x
    x = parseInt(x);
    
    //get the second number and convert it to a interger
    var y = query.y
    y = parseInt(y);
    


    //calculate
    //use if else statement to determine the method of calculation
        
        if(query.method == 'add'){
            result = x + y;
        }
        else if(query.method == 'subtract'){
            result = x - y;
        }
        else if(query.method == 'divide'){
            result = x / y;
        }
        else if(query.method == 'multiply'){
            result = x * y;
        }
    
        //build output message to display the result in the jade template
        var message = 'Method ' + query.method + ' gives the result  ' + result.toString();
    
        
        //show the calculator.jade view
        res.render('calculator', { title: 'Assignment 1',  message: message });
    
        });

module.exports = router;

