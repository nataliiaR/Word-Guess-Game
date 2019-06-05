

function startTheGame() {
//use this function onClick event for PLAY button
var bandToGuess; 
var bandIndex;
var name;

function pickABandToGuess(){
  var bandCollection = ["Metalica", "Deep Purple", "Led Zeppelin"]; 
  bandIndex = Math.floor(Math.random() * bandCollection.length);
  //console.log("band index"+bandIndex);
  bandToGuess = bandCollection[bandIndex];
  return bandToGuess;
}

var name = pickABandToGuess();
//console.log("selected band " +name );

var left_letter= name.length;
console.log("left_letters "+left_letter);
function bandNameToArray(name){

  var arrayofChars = name.split("");
  return arrayofChars;
  }

var arrayNew= bandNameToArray(name);

for (i=0; i<arrayNew.length; i++){
  
  var el = document.createElement("SPAN");
  t = document.createTextNode(arrayNew[i]);
  //el.appendChild("band to guess IS ");
  el.appendChild(t);
  document.getElementById('word_holder').appendChild(el);

}


document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

/* In this example, we use a cross-browser solution, because the keyCode property does not work on the onkeypress event in Firefox. However, the which property does.

Explanation of the first line in the function below: if the browser supports event.which, then use event.which, otherwise use event.keyCode */
var  array;
array = new Array();

var  xx, t, res;

  xx = document.createElement("SPAN");
  
  array.push(userGuess);
  //console.log(userGuess);
  //console.log(array);
  //document.getElementById("test").innerHTML = userGuess;
  t = document.createTextNode(userGuess);
  xx.appendChild(t);
  document.getElementById("guessed_letters").appendChild(xx);
 
}
}