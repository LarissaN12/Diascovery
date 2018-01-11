var config = require('../config');
var express = require('express');
var bodyParser = require('body-parser');
var watson = require('watson-developer-cloud');
var DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
var assert = require('assert');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var date = new Date();
var month = date.getUTCMonth() + 1;
var day = date.getUTCDate();
var year = date.getUTCFullYear();
var horas = date.getHours();
var minutos = date.getMinutes();
var segundos = date.getSeconds();

var newdate = "Data:" + year + "/" + month + "/" + day + " Horário:" + horas + ":" + minutos + ":" + segundos;

var router = express.Router();
var jsonParser = bodyParser.json();

var conversation = watson.conversation(config.watson.conversation);
var discovery = new DiscoveryV1(config.watson.discovery);

var i;


function completa(string1, dia){
  var url = "mongodb://admin:WVKJVYLNGCTLKWFA@sl-us-south-1-portal.15.dblayer.com:31775,sl-us-south-1-portal.14.dblayer.com:31775/compose?authSource=admin&ssl=true";

MongoClient.connect(url, function(err, db){

    if(err){
      throw err;
    }

    db.collection("mensagens", function(err, res){

      if(err){
        throw err;
      }
    if(string1 != null){
      var myobj = { mensagem: string1 , date: dia};
      //console.log(myobj);
      db.collection("mensagens").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("insertado");
      db.close();
  });
}

    })

  })
}

router.post('/', jsonParser, function(req, res, next){
  completa(req.body.input, newdate);
    conversation.message({
        'input': req.body.input,
        'context': req.body.context,
        'workspace_id': config.watson.conversation.workspace_id
    },
    function(err, response){
        if(err){
            console.log('error:', err);
        }else{
          //console.log(response.intents);
            if(i == 1 && response.intents == ""){
                if(response.intents == ""|| response.intents[0].confidence < 0.5){
                    var a = req.body.input;
                    if(a == undefined){
                        //console.log(response.intents[0].confidence)
                        res.json(response);

                    }else{
                        discovery.query({environment_id: '219f2ec0-96a2-431b-9bb5-a616b2bffa66',collection_id: 'd80a9125-a43e-4e21-b2e8-d97761279029',query: a["text"], passages: true}, function(error, data) {
                            //console.log(error);
                            console.log(JSON.stringify(data, null, 2));
                              for(var d = 0; d < data.passages.length; d++){
                                console.log(data.passages[d].passage_text);
                                var stringtest = {text: data.passages[d].passage_text}
                                completa(stringtest, newdate);
                              }
                            res.json(data);
                        });
                    }
                }
            }else{
              completa(response.output.text, newdate);
                i = 1;
                  //console.log(response.intents);
                res.json(response);
            }
        }
    });
 });

module.exports = router;
