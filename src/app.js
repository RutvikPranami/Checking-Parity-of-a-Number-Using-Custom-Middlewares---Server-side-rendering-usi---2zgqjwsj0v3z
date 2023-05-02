const express = require('express');
const app = express();

app.use(express.json());

 


function CheckisOdd(req, res, next) {

    //Write Your Code here
 var value = parseInt(req.query.num);
    if( value%2 == 0 ){
        req.query.isOdd = false;
    }else{
        req.query.isOdd = true;
    }
    next();

}





app.get('/', CheckisOdd, (req, res) => {
    const data = {
        "num" : req.query.num,
        "isOdd" : req.query.isOdd
    };
    res.send(JSON.stringify(data));
});



module.exports = app;
