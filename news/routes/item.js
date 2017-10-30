var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'zhangxiao',
    database:'item'
});

/* GET home page. */
router.get('/list', function(req, res, next) {
    connection.query('SELECT id,name,detail FROM mingzi', function(err, rows, fields) {
        res.setHeader('Access-Control-Allow-Origin','*')
        if (err) throw err;
        res.send(rows);
    });
});
router.post('/detail', function(req, res, next) {
    var id=req.body.abc;
    if(id=="zx"){
        connection.query('SELECT id,name,detail FROM mingzi', function(err, rows, fields) {
            res.setHeader('Access-Control-Allow-Origin','*')
            if (err) throw err;
            res.send(rows);
        });
    }else {
        connection.query('SELECT name,detail,xiang FROM mingzi WHERE id='+id, function(err, rows, fields) {
            res.setHeader('Access-Control-Allow-Origin','*')
            if (err) throw err;
            res.send(rows);
        });
    }

});
router.post('/detail', function(req, res, next) {
    var id=req.body.abc
    connection.query('SELECT name,detal FROM mingzi WHERE id='+id, function(err, rows, fields) {
        res.setHeader('Access-Control-Allow-Origin','*')
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;

