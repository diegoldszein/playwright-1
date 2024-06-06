function Random(){
   return Math.floor(Math.random()*10)+1;
}


let numero = Random()
console.log(numero)



 function comparar(){
     let guess=  parseInt( document.getElementById("textoInput").value,10);
 console.log(guess)
 if (guess === numero){
 console.log('le pegaste')
 document.getElementById("resultado").innerHTML = "Texto ingresado le pegaste : " + numero;

 numero = Random()
 console.log(numero)
    
 }else{console.log('siga intentando')}

 for (let i=0;i<7;i++){
    console.log(suma(guess,i))
    
 }

 function suma(a,b){
    return a*b
    }
 let resultado = suma(guess,1)
 console.log(resultado)

 document.getElementById("resultado").innerHTML = "Texto ingresado: " + guess;
 return suma()
 

 }

 function handleKeyPress(event) {
    if (event.key === "Enter") {
        comparar();
    }
}



