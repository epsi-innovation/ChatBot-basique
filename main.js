const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('le projet est-il cool ? ', (answer) => {
  // TODO: Log the answer in a database
  if(answer==="oui"){
      console.log('on le savait déjà');
  }else if(answer==="non"){
      console.log('t\'es viré');
  }else{
      console.log('personne comprends ton charabia');
  }
  rl.close();
});