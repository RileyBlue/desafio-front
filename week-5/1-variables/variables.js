//JavaScript
// Tipos de Datos

//Números
4
9.3
-10

//Cadenas 
"Hello World"
"43"

//Booleans
true
false

//null y undefined
null
undefined


// Trabajar con números y operadores numéricos.
//Numbers
4
9.3
-10

//Matemáticas

4 + 10     //14
1/5        //0.2

//Operador Módulo

10 % 3   //1
24 % 2   //0
15 % 11  //4

// Trabajar con cadenas y métodos comunes de cadenas. 
//Single or Double quotes OK
"hello world"
'hello world'

//Concatenation
"charlie" + "brown"  //"charliebrown"

//Escape Characters start with "\"
"Singin \"Do wah diddy, diddy, dum diddy do\" "
"This is a backslash: \\"

//Las cadenas poseen una propiedad length
"hello world".length  //11

//Acceder de manera individual a los caracteres usando [] y un index
"hello"[0]  //"h"
"hello"[4]  //"o"


// Ejercicio: Evalua las siguientes instrucciones.

//1.
100 % 3 // 1 

//2.
("blah" + "blah")[6] // a 

//3.
"hello".length % "hi\\".length // 2

// Variables 

//Variables son simplemente contenedores que almacenan valores.
//Siguen el siguiente patrón
var yourVariableName = yourValue; 

//Pueden almacenar todos los valores que hemos visto.
var name = "Rusty";
var secretNumber = 73;
var isAdorable = true;

//Recall the stored value by calling the variable name
var name = "Rusty";
"hello there " + name    //"hello there Rusty"

var num = 37;
num + 3 + 10    //50

//También podemos actualizar valores existentes
var name = "Robert";
name = "Bob";


// Null & Undefined
// Otros dos tipos de primitivas son null and undefined

//Variables que son declaradas pero no
//son inicializadas son undefined
//Las siguientes variables son indefinidas.
var name;
var age;

//null es "explícitamente nada"
var currentPlayer = "charlie";
currentPlayer = null;   //game over