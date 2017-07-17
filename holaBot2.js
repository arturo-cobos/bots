//Primeras pruebas
//invocar botbuilder requiriendo el paquete)
var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
//unir la consola con el bot.

//crear el bot.
var bot = new builder.UniversalBot(connector);

//crear dialogo en el bot.

bot.dialog('/', [
    function(session)
{
session.send('Hola mundo');

}])
//dialogo raiz  