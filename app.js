


function sortear(){
    let numero = parseInt(document.getElementById('numero').value)
    
    
    let numeroSorteado = Math.floor(Math.random()*numero)
    console.log(numeroSorteado)
      
    /* if(numeroSorteado == 0){
        numeroSorteado = numeroSorteado +1
    } */
    
    console.log(numeroSorteado)

    document.getElementById('res').innerHTML=(`O número sorteado foi: ${numeroSorteado + 1}`)       
}

