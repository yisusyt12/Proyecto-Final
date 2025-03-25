const isRining = false

isRining ? console.log("Esta lloviendo. "): console.log("No esta lloviendo")

let myname = "jesus"

let greeting = "Hola mi nombre es " + myname + "!"
console.log(greeting)

let a = 10

let b = 10
console.log( a == b) //igualdad por valor, quiere decir que es falso si los valores son iguales o true si son iguales.
console.log( a===b)// igualdad por identidad o igualdad estricta.
console.log( a!=b )//desigualdad por valor, si no concuerdan es true, si concuerdan los valores es false.
// El operador || significa (or = o)




let number1 = -1

if(number1 == 1 ){
    console.log("El número es positivo.")
}

else if(number1 == -1){
    console.log("El número es negativo.")
}

else(number1 == 0,console.log("El número es cero"))
    

let age = 10
let resultado
if(age >= 18 ){
    console.log("Puede votar.")
}

else{
    let añosfaltantes = 18 - age 
    resultado = `No puede votar ya que es menor de edad, le hacen falta ${añosfaltantes} años para poder votar.`
    console.log(resultado)
}

let age1 = 17

age1 >= 18 ? console.log("Es mayor"):(age1 < 18, console.log("Es menor"))



let idioma = 1

let Saludo 

switch(idioma){
    case 0: 
    Saludo = "Hola"
    break;
    case 1:
        Saludo = "Hi"
        break;
        default:
            Saludo = "Número incorrecto."
}

console.log(Saludo)


let name = "Jesus"

let saludo = "Hola, " + name + "!" 

console.log(saludo)

console.log(saludo.toUpperCase())//colocar en mayúscula las palabras.

console.log(saludo.toLowerCase())// colocar en minuscula las palabras

console.log(saludo.replace("Jesus", "David"))//remplazar valor de variable



let myarray = ["jesus", "david","rivera,", 37, true]

console.log(myarray)

//push y pop
let myarray2 =[]

myarray2[0] = "Jesus"
myarray2[1] = "David"
myarray2[2] = "Rivera"
console.log(myarray2)

myarray2.push(37)//sirve para agregar un elemento más al array.
console.log(myarray2)

myarray2.pop()//sirve para eliminar un elemento más al array.
console.log(myarray2)

//shift y unshift 
console.log(myarray2.shift())//sirve para eliminar el primer elemento del array.
console.log(myarray2)

myarray2.unshift("prueba", "2")//sirve para agregarle elementos al array.
console.log(myarray2)


//clear
myarray = []//sirve para eliminar el viejo array.
console.log(myarray)

console.log(myarray2.length)//sirve para contar el array completo.

let mynewarray = myarray2.slice(0,2)//sirve para tomar trozos de elementos del array.
console.log(mynewarray)

myarray2.splice(0,1)//sirve para eliminar elementos desde un valor inicial hasta otro valor final fijandolo.
console.log(myarray2)




//set

let newset = new Set(["portal-certificado", "ventas-difitales","movilidad", 37, true])
console.log(newset)

// add y delete 
newset.add("jrivera.tecnico.com")//sirve para agregar un valor del set.
console.log(newset)

newset.delete()//sirve para eliminar un valor del set. 
console.log(newset)

//has
console.log(newset.has(37))//validar que exista un elemento dentro del set.

//size

console.log(newset.size)


// convertir set a un array
let cambioArray = Array.from(newset)
console.log(cambioArray)

// convertir array a un set
newset = new Set(cambioArray)
console.log(newset)


//maps

let myMap = new Map()
console.log(myMap)

//inizialitation
myMap = new Map([
["name", "Jesús"],
["email", "jrivera@findingtc.com"],
["age", 18]
])
console.log(myMap)


//Metodos y propiedades

//set

myMap.set("alias", "Yisus")
myMap.set("name", "david")

console.log(myMap)

//get
console.log(myMap.get("name")) //Sirve para ejecutar el dato del mapa definido despues del (=>)
console.log(myMap.get("surname"))

//has 
console.log(myMap.has("age"))// Sirve para validar que existe el dato dentro del mapa definido despues del (=>) como boleano
console.log(myMap.has("surage"))

//delete

myMap.delete("email")
console.log(myMap)

//keys, values y entries  
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

let arrayPrueba = ["Español", "Ingles", "Japones", "italiano", "portugues"]
console.log(arrayPrueba)

arrayPrueba.unshift("Perro", "Gato")
console.log(arrayPrueba)

