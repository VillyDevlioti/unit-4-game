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
                $('#user-score').text(userScore);
                console.log(userScore);
                return;
            });
            $('#crystal-2').on("click",function(){
                userScore+=crystalPoints[1];
                console.log(userScore);
                $('#user-score').text(userScore);
                return;
            });
            $('#crystal-3').on("click",function(){
                userScore+=crystalPoints[2];
                console.log(userScore);
                $('#user-score').text(userScore);
                return;
            });
            $('#crystal-4').on("click",function(){
                userScore+=crystalPoints[3];
                console.log(userScore);
                $('#user-score').text(userScore);
                return;
            });

    }

    function initializeGame (){

        //First, assign a new computer score
        computerNumber = Math.ceil(20+Math.random()*30);
        $('#computer-score').text(computerNumber);
        
        //Then, assign numbers to crystals
        //First we generate four new numbers and we push them to an array
        for (var i=0; i<4; i++) {
            newValue = Math.ceil(Math.random()*9);
            crystalPoints.push(newValue);
            console.log(crystalPoints[i]);

        }
    
        //Then write how many wins and losses the user currently has
        $('#wins').text(wins);
        $('#losses').text(losses);

        //Then write the user score
        $('#user-score').text(0);

        //Now it's time to call the main function
        crystalGameLogic();
    }

    $('#start-new-game').on("click", function(){
        initializeGame();
    });

});
