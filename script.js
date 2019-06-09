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

    var country1 ={ name:"UKRAINE",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/125px-Flag_of_Ukraine.svg.png",learnMore: "https://en.wikipedia.org/wiki/Ukraine"}
    var country2 ={name:"ICELAND",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/125px-Flag_of_Iceland.svg.png",learnMore:"https://en.wikipedia.org/wiki/Iceland"}
    var country3 ={name:"ITALY",image:"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png",learnMore:"https://en.wikipedia.org/wiki/Italy"}
    var country4 ={name:"ARGENTINA",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png",learnMore:"https://en.wikipedia.org/wiki/Argentina"}
    var country5 ={name:"AUSTRALIA",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/125px-Flag_of_Australia_%28converted%29.svg.png",learnMore:"https://en.wikipedia.org/wiki/Australia"}
    var country6 ={name:"NICARAGUA",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/125px-Flag_of_Nicaragua.svg.png",learnMore:"https://en.wikipedia.org/wiki/Nicaragua"}
    var country7 ={ name:"POLAND",image:"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png",learnMore: "https://en.wikipedia.org/wiki/Poland"}
    var country8 ={name:"PORTUGAL",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/125px-Flag_of_Portugal.svg.png",learnMore:"https://en.wikipedia.org/wiki/Portugal"}
    var country9 ={name:"HUNGARY",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/125px-Flag_of_Hungary.svg.png",learnMore:"https://en.wikipedia.org/wiki/Hungary"}
    var country10 ={name:"INDIA",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/125px-Flag_of_India.svg.png",learnMore:"https://en.wikipedia.org/wiki/India"}
    var country11 ={name:"JAPAN",image:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png",learnMore:"https://en.wikipedia.org/wiki/Japan"}
    var country12 ={name:"GEORGIA",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/125px-Flag_of_Georgia.svg.png",learnMore:"https://en.wikipedia.org/wiki/Georgia_(country)"}

    
    function pickACountryToGuess(){
        var countryCollection =[country1, country2,country3,country4,country5,country6,country7, country8,country9,country10,country11,country12];
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