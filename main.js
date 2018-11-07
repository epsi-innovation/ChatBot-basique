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
    
    var meteo = ['temps', 'météo'];
    var heure = ['heure', 'horloge'];
    
    var words = phrase.split(' ');
    
    for(var i=0;i<words.length;i++){
        if(meteo.indexOf(words[i]) >= 0){
            reponseRetournee = 'il fait beau';
        }else if(heure.indexOf(words[i]) >= 0){
            reponseRetournee = 'il est 13h';
        }
    }    
    if(reponseRetournee===null){
        reponseRetournee='pourrais-tu reformuler ?';
    }
    return reponseRetournee;
}

