const isRining = false

isRining ? console.log("Esta lloviendo. "): console.log("No esta lloviendo")

let myname = "jesus"

let greeting = "Hola mi nombre es " + myname + "!"
console.log(greeting)

var nombre3 = "Cadena de prueba"

//IndexOf sirve para acceder a la cadena de texto e identificar desde que número del caracter comienza el valor asignado en el consol.log
console.log(nombre3.indexOf("jesus"))

//Incluides sirve para determinar si en la cadena de texto existe el valor  asignado dentro del console.log
console.log(nombre3.includes("Cadena"))

//Replace sirve para reemplzar un valor de la cadena de texto en el console.log
console.log(nombre3.replace("Cadena", "Prueba"))

//Slice sirve para imprimir el valor inicial que deseas dentro de la cadena de texto hasta el valor que deseas finalizar dentro de la cadena de texto en el console.log
console.log(nombre3.slice(0,10))


//Comillas invertidas sirve para escribir un texto con varias líneas.
let mensaje = `ESTO ES UNA PRUEBA 
DE PRUEBA`

console.log(mensaje)

//con el valor ${} podemos interpolar el tema de llamado de la variable de maera más rapida, pero solo sirve con comillas invertidas ``
let email = "jesusdavid@gmail.com"

console.log(`Hola ${myname} tu email es: ${email}.`)