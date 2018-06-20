const http = require('http');
const colors = require('colors');
const handlers = require('./handlers');

function start() {
    function onRequest(request, response) {
        console.log('Odebrano zapytanie');
        console.log('Zapytanie ' + request.url + ' odebrane.');
        
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        
        switch(request.url) {
            case '/':
            case '/start':
                handlers.welcome(request, response);
                break;
            case '/css/style.css':
                handlers.style(request, response);
                break;
            case '/upload':
                handlers.upload(request, response);
                break; 
            case '/show':
                handlers.show(request, response);
                break;
            default:
                handlers.error(request, response);
        }
    }
    
    http.createServer(onRequest).listen(9000);

    console.log('Uruchomiono server!'.green);
}

exports.start = start;