

function startTheGame() {
document.getElementById("info").style.display="block";
document.getElementById("word_holder").innerHTML = "";
    
//use this function onClick event for PLAY button
var bandToGuess; 
var bandIndex;
var name;
//welcome text
document.createElement("SPAN").appendChild(document.createTextNode("Press a key on keyboard and reveal your letter guess!"));
function pickABandToGuess(){
  var bandCollection =["madonna"]; //["Metalica", "Deep Purple", "Led Zeppelin"]; 
  bandIndex = Math.floor(Math.random() * bandCollection.length);
  //console.log("band index"+bandIndex);
  bandToGuess = bandCollection[bandIndex];
  return bandToGuess;
}

var name = pickABandToGuess();
//console.log("selected band " +name );

function bandNameToArray(name){

  var arrayofChars = name.split("");
  return arrayofChars;
  }

function createBlurredWord(){
var arrayNew= bandNameToArray(name);

for (i=0; i<arrayNew.length; i++){
  
  var el = document.createElement("SPAN");
  t = document.createTextNode(arrayNew[i]);
  //el.appendChild("band to guess IS ");
  el.appendChild(t);
  //document.getElementById('word_holder').appendChild(el).style.visibility="";
  document.getElementById('word_holder').appendChild(el).style.borderBottom="1px solid black";
  document.getElementById('word_holder').appendChild(el).style.margin="1em";
  document.getElementById('word_holder').appendChild(el).style.filter="blur(4px)";
  
}

}

createBlurredWord();
var left_letter= name.length+5;
document.getElementById("letters_left").innerHTML=left_letter + " ";
var userGuess;
var characters;
var character;
document.onkeyup = function(event) {

// Determines which key was pressed.
 userGuess = event.key;

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
  
  left_letter=left_letter-1;
    document.getElementById("letters_left").innerHTML=left_letter + " ";
  
    var amountOfLetters = document.getElementById('word_holder').childElementCount;
    console.log ("amount of letters "+amountOfLetters);
    for (i=0; i<amountOfLetters; i++){
        
        characters = document.getElementById('word_holder').childNodes;
        console.log("user guess + "+ userGuess);
        character = characters[i].innerHTML;
        console.log("character in word + " + character );
        if (userGuess.toLowerCase() == character.toLowerCase()){

            document.getElementById('word_holder').childNodes[i].style.filter="blur(0)";
            
        }

    }
}



}