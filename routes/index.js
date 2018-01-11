var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:WVKJVYLNGCTLKWFA@sl-us-south-1-portal.15.dblayer.com:31775,sl-us-south-1-portal.14.dblayer.com:31775/compose?authSource=admin&ssl=true";
var a;

router.get('/', function(req, res, next) {

  res.render('index');

});

router.get('/bd', function(req, res, next){

  MongoClient.connect(url, function(err, db){

    if(err){
      throw err;
    }

    db.collection("mensagens").find({}).toArray(function(err, result) {
       if (err) throw err;
       //console.log(result);
       a = result;
       db.close();
       console.log(Object.keys(result).length);
       var array = [];
       var day = [];
       for(var count = 0; count < Object.keys(result).length; count++){
        if(result[count].mensagem[0]){
        array.push(JSON.stringify(result[count].mensagem[0]));
      }else{
        array.push(JSON.stringify(result[count].mensagem.text));
      }
        day.push(JSON.stringify(result[count].date));
      }
      console.log(array);
       res.render('bd', {dados: /*JSON.stringify(result[0].mensagem[0], null, 2)*/array, dados1: day})
     });
  })

})

module.exports = router;
