document.getElementById("header").style.backgroundImage='url("assets/images/map.jpg")';
document.getElementById("h1_header").style.display="block";

if(document.getElementById("linklearnMore")){
    document.getElementById("learnMore").removeChild(document.getElementById("linklearnMore"));
}

function startTheGame() {
    if(document.getElementById("linklearnMore")){
        document.getElementById("learnMore").removeChild(document.getElementById("linklearnMore"));
    }
    
    document.getElementById("header").style.backgroundImage='url("assets/images/map.jpg")';
    document.getElementById("h1_header").style.display="block";

    //clear guessed word between games

    document.getElementById("word_holder").innerHTML = "";
    document.getElementById("guessed_letters").innerHTML ="";
    //show info tag after starting a game
    document.getElementById("info").style.display="block";
    //show welcome text after starting a game
    document.createElement("SPAN").appendChild(document.createTextNode("Press a key on keyboard and reveal your letter guess!"));

    var countryToGuess; 
    var countryIndex;
    var name;
    var userGuess;
    var characters;
    var character;
    var match=0;
    var left_letter;
    var amountOfLetters =0;

    var country1 ={
        name:"UKRAINE",
        image:"assets/images/ukraine.jpg",
        learnMore: "https://en.wikipedia.org/wiki/Ukraine"
    
    }

    var country2 ={
        name:"ICELAND",
        image:"assets/images/iceland.jpg",
        learnMore:"https://en.wikipedia.org/wiki/Iceland"
    }

    var country3 ={
        name:"ITALY",
        image:"assets/images/italy.jpg",
        learnMore:"https://en.wikipedia.org/wiki/Italy"
    }

    var country4 ={
        name:"ARGENTINA",
        image:"assets/images/argentina.jpg",
        learnMore:"https://en.wikipedia.org/wiki/Argentina"
    }

    var country5 ={
        name:"AUSTRALIA",
        image:"assets/images/australia.jpg",
        learnMore:"https://en.wikipedia.org/wiki/Australia"
    }

    var country6 ={
        name:"NICARAGUA",
        image:"assets/images/nicaragua.jpg",
        learnMore:"https://en.wikipedia.org/wiki/Nicaragua"
    }


    
    function pickACountryToGuess(){
        var countryCollection =[country1, country2,country3,country4,country5,country6];
        countryIndex = Math.floor(Math.random() * countryCollection.length);

        countryToGuess = countryCollection[countryIndex];
        return countryToGuess.name;
    }

    var name = pickACountryToGuess();


    function countryNameToArray(name){

        var arrayofChars = name.split("");
        return arrayofChars;
    }

    function createBlurredWord(){
        var arrayNew= countryNameToArray(name);

        for (i=0; i<arrayNew.length; i++){
  
            var el = document.createElement("SPAN");
            t = document.createTextNode(arrayNew[i]);
            el.appendChild(t);
            document.getElementById('word_holder').appendChild(el).style.margin="1em";
            document.getElementById('word_holder').appendChild(el).style.filter="blur(4px)";
            
        }
    }

    createBlurredWord();

    left_letter= name.length+5;

    document.getElementById("letters_left").innerHTML=left_letter + " ";

    document.onkeyup = function(event) {
        if (left_letter>0 ){
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
            document.getElementById("guessed_letters").appendChild(spanElement).style.margin="0.7em";
            
            left_letter=left_letter-1;

            
            document.getElementById("letters_left").innerHTML=left_letter + " ";

            amountOfLetters = document.getElementById('word_holder').childElementCount;


            for (i=0; i<amountOfLetters; i++){
            
                characters = document.getElementById('word_holder').childNodes;
   
                character = characters[i].innerHTML;

                if (userGuess.toLowerCase() === character.toLowerCase() ){
                    
                    if(document.getElementById('word_holder').childNodes[i].style.filter!="blur(0px)"){
                        document.getElementById('word_holder').childNodes[i].style.filter="blur(0px)";
                        match= match+1;
                    }

                }

            }
            if(match===amountOfLetters){
                document.getElementById("guessed_letters").innerHTML="YOU'VE GUESSED THE WORD!";
                document.getElementById("header").style.backgroundImage = 'url("'+ countryToGuess.image + '")';
                document.getElementById("h1_header").style.display="none";
                var learnMoreLink = document.createElement("a");
                learnMoreLink.textContent="Learn more about " + countryToGuess.name;
                learnMoreLink.setAttribute('href',countryToGuess.learnMore);
                learnMoreLink.setAttribute("id","linklearnMore");
                document.getElementById("learnMore").appendChild(learnMoreLink);
            
                document.onkeyup = null;
                document.getElementById("info").style.display="none";
            
            }
                    
 
        }

        else{
            document.getElementById("guessed_letters").innerHTML="OH NO, YOU DID NOT GUESS THE COUNTRY!";
            document.getElementById("info").style.display="none";
            document.onkeyup = null;
        }   
    }


}