# unit-4-game pseudocode

Initialize game
    give a new random number for user to guess
    assign random numbers to crystals
    start game

Start game
    check where the user clicks
    add value to user's score
    compare user's score with computer's score
        if user's score < computer's score
            keep guessing
        if user's score === computer's score
            win ++
            initialize game
        else
            loss ++
            initialize game
