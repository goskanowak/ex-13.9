exports.upload = function(request, response) {
    console.log('Rozpoczynam obsługę żądania upload.'.green);
    response.write('Rozpoczynam upload');
    response.end();
}

exports.welcome = function(request, response) {
    console.log('Rozpoczynam obsługę żądania welcome.'.green);
    response.write('Witaj na stronie startowej');
    response.end();
}

exports.error = function(request,response) {
    console.log('Błąd'.red);
    response.write('404...');
    response.end();
}