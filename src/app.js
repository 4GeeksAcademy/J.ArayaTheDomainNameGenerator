
// window.onload = function () {

//   }


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let topLevelDomains = ['.com', '.net', '.us', '.io']



function posiblNomDominio() {
  
  let listaDeOpciones = [];
  let cont = 0;

  for (let i = 0; i < pronoun.length; i++) {
    let nomDominioFinal = '';
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        nomDominioFinal += pronoun[i] +adj[j] +noun[x] + topLevelDomains[Math.floor(Math.random()*topLevelDomains.length)];
        listaDeOpciones.push(nomDominioFinal)
        cont++
        console.log(cont+" "+nomDominioFinal)
        nomDominioFinal = '';
      }   
    }
  }
  return listaDeOpciones
}

posiblNomDominio()
