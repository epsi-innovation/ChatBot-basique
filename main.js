const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question('', (answer) => {
      var laQuestion = answer.toString();
      console.log(verifTheme(laQuestion)); 
      recursiveAsyncReadLine();
    });
};
recursiveAsyncReadLine();

function verifTheme(phrase) {
    var reponseRetournee = null;
    
    if(phrase.indexOf('meteo') >= 0){
      reponseRetournee = 'il fait beau';
    }else if(phrase.indexOf('heure') >= 0){
      reponseRetournee = 'il est 13h';
    }else{
      reponseRetournee = 'pourrais-tu reformuler ?';
    }
    return reponseRetournee;
}

