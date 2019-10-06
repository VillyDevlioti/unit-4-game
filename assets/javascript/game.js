var computerNumber;
var newValue;
var wins=0;
var losses=0;
var userScore=0;
var crystalPoints=[]; // this is where we store all the crystal points

$(document).ready(function() {

    function crystalGameLogic() {
        $('#crystal-1').on("click",function(){
            userScore+=crystalPoints[0];
            console.log("User score updated:",userScore);
            $('#user-score').text(userScore);
            if(userScore===computerNumber){
                $('#user-score').text(userScore);
                wins++;
                console.log('won');
                initializeGame();
            }
            else if(userScore>computerNumber)
            {   $('#user-score').text(userScore);
                losses++;
                console.log('lost');
                initializeGame();
            }
        });
        $('#crystal-2').on("click",function(){
            userScore+=crystalPoints[1];
            console.log("User score updated:",userScore);
            $('#user-score').text(userScore);
            if(userScore===computerNumber){
                wins++;
                initializeGame();
            }
            else if(userScore>computerNumber)
            {
                losses++;
                initializeGame();
            }
        });
        $('#crystal-3').on("click",function(){
            userScore+=crystalPoints[2];
            console.log("User score updated:",userScore);
            $('#user-score').text(userScore);
            if(userScore===computerNumber){
                wins++;
                initializeGame();
            }
            else if(userScore>computerNumber)
            {
                losses++;
                initializeGame();
            }
        });
        $('#crystal-4').on("click",function(){
            userScore+=crystalPoints[3];
            console.log("User score updated:",userScore);
            $('#user-score').text(userScore);
            if(userScore===computerNumber){
                wins++;
                initializeGame();
            }
            else if(userScore>computerNumber)
            {
                losses++;
                initializeGame();
            }
        });
    }

    function initializeGame (){

        //First, assign a new computer score and turn user Score to 0
        userScore=0;
        $('#user-score').text(userScore);
        computerNumber = Math.ceil(20+Math.random()*30);
        $('#computer-score').text(computerNumber);
        
        //Then, assign numbers to crystals
        //First we generate four new numbers and we add them to an array
        for (var i=0; i<4; i++) {
            newValue = Math.ceil(Math.random()*11);
            crystalPoints[i]=newValue;
            console.log("the starting points of each crystal",crystalPoints[i]);
        }
    
        //Then write how many wins and losses the user currently has
        $('#wins').text(wins);
        $('#losses').text(losses);

        //Then write the user score

        //Now it's time to call the main function
        crystalGameLogic();
    }

    //$('#start-new-game').on("click", function(){
        initializeGame();
    //});

});
