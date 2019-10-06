# unit-4-game pseudocode

Initialize game
    give a new random number for user to guess
    assign random numbers to crystals
    start game
    write wins and losses

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


Note: I've noticed that after the first game is lost/won the userScore doesn't update properly, in fact it doubles the value of each gem. I've tried controlling and monitoring with console.log and using stopPropagation, but it didn't help!¯\_(ツ)_/¯
