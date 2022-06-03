let i=0;

var myPix = ["img/cards/2_of_clubs.png",        "img/cards/2_of_diamonds.png",     "img/cards/2_of_hearts.png",     "img/cards/2_of_spades.png",
             "img/cards/3_of_clubs.png",        "img/cards/3_of_diamonds.png",     "img/cards/3_of_spades.png",     "img/cards/3_of_spades.png",
             "img/cards/4_of_clubs.png",        "img/cards/4_of_diamonds.png",     "img/cards/4_of_hearts.png",     "img/cards/4_of_spades.png",
             "img/cards/5_of_clubs.png",        "img/cards/5_of_diamonds.png",     "img/cards/5_of_hearts.png",     "img/cards/5_of_spades.png",
             "img/cards/6_of_clubs.png",        "img/cards/6_of_diamonds.png",     "img/cards/6_of_hearts.png",     "img/cards/6_of_spades.png",
             "img/cards/7_of_clubs.png",        "img/cards/7_of_diamonds.png",     "img/cards/7_of_hearts.png",     "img/cards/7_of_spades.png",
             "img/cards/8_of_clubs.png",        "img/cards/8_of_diamonds.png",     "img/cards/8_of_hearts.png",     "img/cards/8_of_spades.png",
             "img/cards/9_of_clubs.png",        "img/cards/9_of_diamonds.png",     "img/cards/9_of_hearts.png",     "img/cards/9_of_spades.png",
             "img/cards/10_of_clubs.png",       "img/cards/10_of_diamonds.png",    "img/cards/10_of_hearts.png",    "img/cards/10_of_spades.png",
             "img/cards/ace_of_clubs.png",      "img/cards/ace_of_diamonds.png",   "img/cards/ace_of_hearts.png",   "img/cards/ace_of_spades.png",
             "img/cards/jack_of_clubs.png",     "img/cards/jack_of_diamonds.png",  "img/cards/jack_of_hearts.png",  "img/cards/jack_of_spades.png",
             "img/cards/king_of_clubs.png",     "img/cards/king_of_diamonds.png",  "img/cards/king_of_hearts.png",  "img/cards/king_of_spades.png",
             "img/cards/queen_of_clubs.png",    "img/cards/queen_of_diamonds.png", "img/cards/queen_of_hearts.png", "img/cards/queen_of_spades.png"];

var checks=["1","1","1","1","2" ,"2","2","2","3","3","3","3","4","4","4","4","5" ,"5","5","5","6","6","6","6","7","7","7","7","8" ,"8","8","8","9","9","9","9","10","10","10","10","11" ,"11","11","11","12","12","12","12","13","13","13","13","14" ,"14","14","14","15","15","15","15"];

var inhalt=[];
function showcard() {

    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalt.push(checks[randomNum]);

    var randomNum2 = Math.floor(Math.random() * myPix.length);
    document.getElementById("card2").src = myPix[randomNum2];
    myPix.splice(randomNum2,1);
    inhalt.push(checks[randomNum2]);

    var randomNum3 = Math.floor(Math.random() * myPix.length);
    document.getElementById("tableCard1").src = myPix[randomNum3];
    myPix.splice(randomNum3,1);
    inhalt.push(checks[randomNum3]);

    var randomNum4 = Math.floor(Math.random() * myPix.length);
    document.getElementById("tableCard2").src = myPix[randomNum4];
    myPix.splice(randomNum4,1);
    inhalt.push(checks[randomNum4]);

    var randomNum5 = Math.floor(Math.random() * myPix.length);
    document.getElementById("tableCard3").src = myPix[randomNum5];
    myPix.splice(randomNum5,1);
    inhalt.push(checks[randomNum5]);
    if(pair()==true){
        console.log("true");
        document.getElementById("pair").style.background="rgb(255, 0, 0)";
    }
        //check(randomNum,randomNum2,randomNum3,randomNum4,randomNum5);

}
function pair(){
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < inhalt.length; ++i) {
        var value = inhalt[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}
function check(check,check2,check3,check4,check5){

    console.log(check,check2);


    const s=[0,1,2,3,4,5,6,7,8,9];
    let c=0;

    for (const inputValues of checks.from(checkEmailValues)) {

        if(inputValues == value) {
            console.log("matches");
        } else {
            console.log("doesnt match");
        }
    }
    while(c<=s.length){
        if(myPix[check].includes(s[c])==myPix[check2].includes(s[c])&&check<=40&&check2<=40&&myPix[check].includes(s[c])!=false&&myPix[check2].includes(s[c])!=false){
            document.getElementById("pair").style.background="rgb(255, 0, 0)";
        }
        c++;
    }
    if(myPix[check].includes('ace')==myPix[check2].includes('ace')&&myPix[check].includes('ace')!=false&&myPix[check2].includes('ace')!=false){
        document.getElementById("pair").style.background="rgb(255, 0, 0)";
    }
    if(myPix[check].includes('jack')==myPix[check2].includes('jack')&&myPix[check].includes('jack')!=false&&myPix[check2].includes('jack')!=false){
        document.getElementById("pair").style.background="rgb(255, 0, 0)";
    }
    if(myPix[check].includes('king')==myPix[check2].includes('king')&&myPix[check].includes('king')!=false&&myPix[check2].includes('king')!=false){
        document.getElementById("pair").style.background="rgb(255, 0, 0)";
    }
    if(myPix[check].includes('queen')==myPix[check2].includes('queen')&&myPix[check].includes('queen')!=false&&myPix[check2].includes('queen')!=false){
        document.getElementById("pair").style.background="rgb(255, 0, 0)";
    }
    myPix.splice(check,1);
    myPix.splice(check2,1);

    exports.myPix2=myPix;
}

function chooseCard(){

}
