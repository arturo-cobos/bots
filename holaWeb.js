var restify= require('restify');
var botbuilder = require('botbuilder');

var server = restify.createServer();
server.listen(process.env.port || porcess.env.PORT || 3978, function () {
    console.log('%s listening to %s ',server.name, server.url);
});
var connector = new builder.ChatConnector({

    appId: '',
    appPassword: ''
});
var bot = new builder.universalBot(connector);
server.post('/api/messsages', connector.listen());