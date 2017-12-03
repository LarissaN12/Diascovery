var config = require('../config');
var express = require('express');
var bodyParser = require('body-parser');
var watson = require('watson-developer-cloud');
var DiscoveryV1 = require('watson-developer-cloud/discovery/v1')

var router = express.Router();
var jsonParser = bodyParser.json();

var conversation = watson.conversation(config.watson.conversation);
var discovery = new DiscoveryV1(config.watson.discovery);

var i;

router.post('/', jsonParser, function(req, res, next){
    conversation.message({
        'input': req.body.input,
        'context': req.body.context,
        'workspace_id': config.watson.conversation.workspace_id
    },
    function(err, response){
        if(err){
            console.log('error:', err);
        }else{  
            console.log(JSON.stringify(response, null, 2));
            if(i == 1 && response.intents == ""){
                if(response.intents == ""|| response.intents[0].confidence < 0.5){
                    var a = req.body.input;
                    if(a == undefined){
                        
                        res.json(response);
                    }else{
                        discovery.query({environment_id: 'Discovery Environment_id Here',collection_id: 'Discovery Colletion_ID Here',query: a["text"], passages: true}, function(error, data) {
                            console.log(error);
                            console.log(JSON.stringify(data, null, 2));
                            res.json(data);
                        });
                    }
                }
            }else{
                res.json(response);
                i = 1;
            }
        }
    });
 });

module.exports = router;