var computerNumber;
var newValue;
var wins=0;
var losses=0;
var userScore=0;

$(document).ready(function() {
    function initializeGame (){

        //First, assign a new computer score
        computerNumber = Math.ceil(20+Math.random()*30);
        $('#computer-score').text(computerNumber);
        
        //Then, assign numbers to crystals
        for (var i=1; i<=4; i++){
            var newValue = Math.ceil(Math.random()*9);
            $('#crystal').attr('value', newValue);
            console.log("value of crystal",i,"is",newValue); // checking that everything works
        }

        //Then write how many wins and losses the user currently has
        $('#wins').text(wins);
        $('#losses').text(losses);

        //Then write the user score
        $('#user-score').text(userScore);
    }


    $('#start-new-game').on("click", function(){
        initializeGame();
    });

});
