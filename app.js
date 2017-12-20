//Comentario de línea
/*
COMENTARIO DE BLOQUE

console.log("Hola Mundo!!!");
console.log("Holamundo".length);


const pi=3.1416182432;
console.log(pi);

var variable1="Hola mundo";
var variable2=true;
var variable3=4;

console.log(variable1);
console.log(variable2);
console.log(variable3);

//matemáticas

console.log(variable3 + pi);
console.log(variable3 - pi);
console.log(variable3 * pi);
console.log(variable3 / pi);
console.log(variable3 + 20);
console.log(variable3 + " " + variable1);

//Mensaje de interacción
var respuesta=confirm("Que guapo eres!!!");
console.log(respuesta);


for(let i=0;i<10;i++){
  console.log(i)
};

for(let i=0;i<11;i++){
  console.log("5x" + i + "=" + 5*i)
};

console.log(5>3);
console.log(5+1==8);

if (("Xavi".length<=10) && variable3==4)
{
  console.log("Tienes un nombre muy corto");
};

if (("Xavi".length<=10) || variable3==5)
{
  console.log("Tienes un nombre muy corto 2");
};

for(let i=1;i<101;i++){
  if (i%2==0){
    console.log(i)
  }
}
*/

/*console.log("Marc Alemany".substring(0,4));
console.log("Marc Alemany".substring(5,12));

alert("Mensaje por pantalla");

var edad=prompt("Introduce tu edad");
console.log("edad = "+edad);

var nombre=prompt("Introduce tu nombre");
var edad=prompt("Introduce tu edad");
console.log ("Buenos días, "+nombre+". Tienes "+edad+" años.");*/


var aleatorio=(Math.floor(Math.random()*3)+1);
console.log("Número aleatorio ", aleatorio);
var ppt=prompt("¿Piedra, papel o tijera?");
if ((ppt=="piedra") && (aleatorio==1)){
  alert("Piedra contra piedra, empatamos");
};
if ((ppt=="piedra") && (aleatorio==2)){
  alert("Piedra contra papel, ¡gano!");
};
if ((ppt=="piedra") && (aleatorio==3)){
  alert("Piedra contra tijera, ¡ganas!");
};
if ((ppt=="papel") && (aleatorio==1)){
  alert("Papel contra piedra, ¡ganas!");
};
if ((ppt=="papel") && (aleatorio==2)){
  alert("Papel contra papel, empatamos");
};
if ((ppt=="papel") && (aleatorio==3)){
  alert("Papel contra tijera, ¡gano!");
};
if ((ppt=="tijera") && (aleatorio==1)){
  alert("Tijera contra piedra, ¡gano!");
};
if ((ppt=="tijera") && (aleatorio==2)){
  alert("Tijera contra papel, ¡ganas!");
};
if ((ppt=="tijera") && (aleatorio==3)){
  alert("Tijera contra tijera, empatamos");
};
