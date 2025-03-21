
// window.onload = function () {

//   }


let pronoun = ['the', 'our', 'my', 'your', 'his', 'her', 'its', 'their', 'this', 'that'];
let adj = ['great', 'big', 'awesome', 'fast', 'crazy', 'funny', 'cool', 'epic', 'smart', 'weird'];
let noun = ['jogger', 'racoon', 'developer', 'ninja', 'pirate', 'robot', 'dragon', 'wizard', 'unicorn', 'penguin'];
let topLevelDomains = ['.com', '.net', '.us', '.io']



function posiblNomDominio() {
  
  let listaDeOpciones = [];
  let cont = 0;
  let domainHack = true;

  for (let i = 0; i < pronoun.length; i++) {
    let nomDominioFinal = '';
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        if ((Math.floor(Math.random()*2) == 1)){
          nomDominioFinal += pronoun[i] +adj[j] + hacerDomainHack(noun[x]) + "  AQUI ESTA EL DOMAIN HACK"
        } else {
          nomDominioFinal += pronoun[i] +adj[j] +noun[x] + topLevelDomains[Math.floor(Math.random()*topLevelDomains.length)];
        }
        listaDeOpciones.push(nomDominioFinal)
        cont++
        console.log(cont+" "+nomDominioFinal)
        nomDominioFinal = '';
      }   
    }
  }
  return listaDeOpciones
}

function hacerDomainHack(palabra) {
  let palabraTrucada = "";
  for (let i = 0; i < palabra.length; i++) {
    if (i  == palabra.length-3){
      palabraTrucada+= palabra[i]+ "."
    } else {
      palabraTrucada+= palabra[i]
    }
  }
  return palabraTrucada
}

posiblNomDominio()
