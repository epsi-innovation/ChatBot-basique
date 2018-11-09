const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const recursiveAsyncReadLine = function () {
    rl.question('', (answer) => {
      const theQuestion = answer.toString();
      console.log(verifTheme(theQuestion)); 
      recursiveAsyncReadLine();
    });
};
recursiveAsyncReadLine();

function verifTheme(phrase) {
    var answerReturn = null;
    
    const meteo = ['temps', 'météo'];
    const heure = ['heure', 'horloge'];
    
    const words = phrase.split(' ');
    
    for(var i=0;i<words.length;i++){
        if(meteo.indexOf(words[i]) >= 0){
            answerReturn = 'il fait beau';
        }else if(heure.indexOf(words[i]) >= 0){
            answerReturn = 'il est 13h';
        }
    }    
    if(answerReturn===null){
        answerReturn='pourrais-tu reformuler ?';
    }
    return answerReturn;
}

