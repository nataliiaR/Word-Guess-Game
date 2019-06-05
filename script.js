

function startTheGame() {
    //clear guessed word between games
    document.getElementById("word_holder").innerHTML = "";
    document.getElementById("guessed_letters").innerHTML ="";
    //show info tag after starting a game
    document.getElementById("info").style.display="block";
    //show welcome text after starting a game
    document.createElement("SPAN").appendChild(document.createTextNode("Press a key on keyboard and reveal your letter guess!"));

    var bandToGuess; 
    var bandIndex;
    var name;
    var userGuess;
    var characters;
    var character;
    var match=0;
    var left_letter;

    function pickABandToGuess(){
        var bandCollection =["madonna"]; //["Metalica", "Deep Purple", "Led Zeppelin"]; 
        bandIndex = Math.floor(Math.random() * bandCollection.length);

        bandToGuess = bandCollection[bandIndex];
        return bandToGuess;
    }

    var name = pickABandToGuess();


    function bandNameToArray(name){

        var arrayofChars = name.split("");
        return arrayofChars;
    }

    function createBlurredWord(){
        var arrayNew= bandNameToArray(name);

        for (i=0; i<arrayNew.length; i++){
  
            var el = document.createElement("SPAN");
            t = document.createTextNode(arrayNew[i]);
            el.appendChild(t);
            document.getElementById('word_holder').appendChild(el).style.borderBottom="1px solid black";
            document.getElementById('word_holder').appendChild(el).style.margin="1em";
            document.getElementById('word_holder').appendChild(el).style.filter="blur(4px)";
            
        }
    }

    createBlurredWord();

    left_letter= name.length+5;

    document.getElementById("letters_left").innerHTML=left_letter + " ";

    document.onkeyup = function(event) {
        if (left_letter>0){
        // Determines which key was pressed.
            userGuess = event.key;
            //array to keep already pressed keys
            var  array= new Array();
            //helpers
            var  spanElement, textNodeinSpan;
            //create new span element to keep entered value there
            spanElement = document.createElement("SPAN");
            
            array.push(userGuess);
            textNodeinSpan = document.createTextNode(userGuess);
            spanElement.appendChild(textNodeinSpan);
            document.getElementById("guessed_letters").appendChild(spanElement);
            
            left_letter=left_letter-1;

            
            document.getElementById("letters_left").innerHTML=left_letter + " ";

            var amountOfLetters = document.getElementById('word_holder').childElementCount;

            for (i=0; i<amountOfLetters; i++){
            
                characters = document.getElementById('word_holder').childNodes;
   
                character = characters[i].innerHTML;

                if (userGuess.toLowerCase() == character.toLowerCase()){

                    document.getElementById('word_holder').childNodes[i].style.filter="blur(0)";
                    
                    match= match+1;
                }

            }
            if(match==amountOfLetters){
                document.getElementById("guessed_letters").innerHTML="YOU'VE GUESSED THE WORD!";
                document.onkeyup = null;
            
            }
        }
        else{
            document.getElementById("guessed_letters").innerHTML="OH NO, YOU DID NOT GUESS THE WORD!";
            document.getElementById("info").style.display="none";
            document.onkeyup = null;
        }   
    }


}