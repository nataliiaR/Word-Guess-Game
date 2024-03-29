document.getElementById("header").style.backgroundImage='url("assets/images/map.jpg")';
document.getElementById("h1_header").style.display="block";
document.getElementById("game-results").style.display="none";

if(document.getElementById("linklearnMore")){
    document.getElementById("learnMore").removeChild(document.getElementById("linklearnMore"));
}

var wins=0;
var losses=0;

function startTheGame() {
    document.getElementById("game-results").style.display="block";


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
   // document.createElement("SPAN").appendChild(document.createTextNode("Press a key on keyboard and reveal your letter guess!"));

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
    var country13 ={name:"ECUADOR",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/250px-Flag_of_Ecuador.svg.png",learnMore:"https://en.wikipedia.org/wiki/Ecuador"}
    var country14 ={name:"NORWAY",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/125px-Flag_of_Norway.svg.png",learnMore:"https://en.wikipedia.org/wiki/Norway"}
    var country15 ={name:"FINLAND",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/125px-Flag_of_Finland.svg.png",learnMore:"https://en.wikipedia.org/wiki/Finland"}
    var country16 ={name:"AUSTRIA",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/125px-Flag_of_Austria.svg.png",learnMore:"https://en.wikipedia.org/wiki/Austria"}
    var country17 ={name:"MONTENEGRO",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/125px-Flag_of_Montenegro.svg.png",learnMore:"https://en.wikipedia.org/wiki/Montenegro"}
    var country18 ={name:"TANZANIA",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/125px-Flag_of_Tanzania.svg.png",learnMore:"https://en.wikipedia.org/wiki/Tanzania"}
    var country19 ={name:"UGANDA",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/125px-Flag_of_Uganda.svg.png",learnMore:"https://en.wikipedia.org/wiki/Uganda"}
    var country20 ={name:"BELGIUM",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/125px-Flag_of_Belgium.svg.png",learnMore:"https://en.wikipedia.org/wiki/Belgium"}
    var country21 ={name:"MOROCCO",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/125px-Flag_of_Morocco.svg.png",learnMore:"https://en.wikipedia.org/wiki/Morocco"}
    var country22 ={name:"MONGOLIA",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/125px-Flag_of_Mongolia.svg.png",learnMore:"https://en.wikipedia.org/wiki/Mongolia"}
    var country23 ={name:"AZERBAIJAN",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/125px-Flag_of_Azerbaijan.svg.png",learnMore:"https://en.wikipedia.org/wiki/Azerbaijan"}
    var country24 ={name:"ESTONIA",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/125px-Flag_of_Estonia.svg.png",learnMore:"https://en.wikipedia.org/wiki/Estonia"}
    var country25 ={name:"PANAMA",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/125px-Flag_of_Panama.svg.png",learnMore:"https://en.wikipedia.org/wiki/Panama"}
    var country26 ={name:"MOZAMBIQUE",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/125px-Flag_of_Mozambique.svg.png",learnMore:"https://en.wikipedia.org/wiki/Mozambique"}
    var country27 ={name:"VIETNAM",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/125px-Flag_of_Vietnam.svg.png",learnMore:"https://en.wikipedia.org/wiki/Vietnam"}

    function pickACountryToGuess(){
        var countryCollection =[country1, country2,country3,country4,country5,country6,country7, 
            country8,country9,country10,country11,country12,country13,country14,country15,
            country16, country17,country18, country19, country20, country21, country22,
            country22, country23, country24, country25, country26,country27];
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
            document.getElementById('word_holder').appendChild(el).style.fontSize="2em";
            document.getElementById('word_holder').appendChild(el).style.fontWeight="bold";
            document.getElementById('word_holder').appendChild(el).style.filter="blur(8px)"; 
        }
    }

    createBlurredWord();

    left_letter= name.length+5;

    document.getElementById("letters_left").innerHTML=left_letter + " ";

    document.onkeyup = function(event) {
        left_letter=left_letter-1;

       if (left_letter===0){
        
                userGuess = event.key;
                var  array= new Array();
                var  spanElement, textNodeinSpan;
                spanElement = document.createElement("SPAN");
                array.push(userGuess);
                textNodeinSpan = document.createTextNode(userGuess);
                spanElement.appendChild(textNodeinSpan);
                document.getElementById("guessed_letters").appendChild(spanElement).style.margin="0.7em";                  
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
                    document.getElementById("start_game").textContent="Start a new game!";
                    wins=wins+1;
                    document.getElementById("wins").innerHTML = wins;
                    
                }
            }

        if (left_letter>0){
            
            userGuess = event.key;

             var  array= new Array();

            var  spanElement, textNodeinSpan;
            //create new span element to keep entered value there
            spanElement = document.createElement("SPAN");
            array.push(userGuess);
            textNodeinSpan = document.createTextNode(userGuess);
            spanElement.appendChild(textNodeinSpan);
            document.getElementById("guessed_letters").appendChild(spanElement).style.margin="0.7em";
            
            
            document.getElementById("letters_left").innerHTML=left_letter + " attempts ";
            
   
        
            if(left_letter===0){
                document.getElementById("letters_left").innerHTML=" last attempt ";
            }
            
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
                document.getElementById("start_game").textContent="Start a new game!";
                wins=wins+1;
                document.getElementById("wins").innerHTML = wins;

            }
        }
        else if (match!==amountOfLetters){ 
            document.getElementById("guessed_letters").innerHTML="OH NO, YOU DID NOT GUESS THE COUNTRY!";
            document.getElementById("info").style.display="none";
            document.onkeyup = null;
            document.getElementById("start_game").textContent="Start a new game!";
            losses=losses+1;
            document.getElementById("losses").innerHTML = losses;

        }  
    }
}