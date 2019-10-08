var computerNumber;
var newValue;
var wins=0;
var losses=0;
var userScore=0;
var crystalPoints=[]; // this is where we store all the crystal points

$(document).ready(function() {

    function yay() {
        wins++; 
        initializeGame();
    }

    function nay () {
        losses++;
        initializeGame();
    }
    
    
    
    
    function crystalGameLogic() {
        //I had to look that code up, because I had spaghetti code. 
        $("div[id*='button-']").on("click", function(){
            console.log(userScore, "inside logic first");
            userScore += Number($(this).attr('value'));
            $('#user-score').text(userScore);
            console.log(userScore, "inside logic");

            if (userScore>computerNumber) {
                nay();
            }

            else if (userScore===computerNumber) {
                yay();
            }


/*             //now check whether score is okay
            if(userScore>computerNumber){
                losses++;
                initializeGame();       
            }
            else if(userScore===computerNumber) {
                wins++;
                initializeGame();
            } */
        });

    }

    function initializeGame (){

        //First, assign a new computer score and turn user Score to 0
        userScore=0;
        $('#user-score').text(userScore);
        console.log(userScore, "inside initialize");

        computerNumber = Math.ceil(18+Math.random()*101);
        $('#computer-score').text(computerNumber);
        
        //Then, assign numbers to crystals
        //First we generate four new numbers and we add them to an array
        for (var i=0; i<4; i++) {
            //create a new table every time. 
            //Splice: At position i, remove 1 item, and add a random number
            crystalPoints.splice(i,1,Math.ceil(Math.random()*12));
           
        }
        console.log(crystalPoints);

        //Then I create a new attribute to assign it to each crystal, because I want to use 'this' and understand how it works!!!
        $('#button-1').attr('value', crystalPoints[0]);
        $('#button-2').attr('value', crystalPoints[1]);
        $('#button-3').attr('value', crystalPoints[2]);
        $('#button-4').attr('value', crystalPoints[3]);
    
        //Then write how many wins and losses the user currently has
        $('#wins').text(wins);
        $('#losses').text(losses);

        //Now it's time to call the main function
        
    }

    initializeGame();
    crystalGameLogic();

});

