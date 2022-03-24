$(document).ready(function (){    
        const player1 = "O";  /// always start with "O" then "X"
        const player2 = "X";

        const $sq1 = $('#sq1') // Jquery to select boxes
        const $sq2 = $('#sq2')
        const $sq3 = $('#sq3')
        const $sq4 = $('#sq4')
        const $sq5 = $('#sq5')
        const $sq6 = $('#sq6')
        const $sq7 = $('#sq7')
        const $sq8 = $('#sq8')
        const $sq9 = $('#sq9')
    
        let countTurn = 1; ///// turn start 1 and turn 1 3 5 7 9 = player1 ||| 2 4 6 8 = player2 

        const player1Turn = function(){ ///this function will find player1 turn or not
            if(countTurn % 2 === 0){
            return false;
            }else{
            return true;
            }            
        }
        const judgeGame = function(){  
            if($sq1.text() === 'O' && $sq2.text() === 'O' && $sq3.text() === 'O' || // This function finds winning combinations for player1 O
               $sq4.text() === 'O' && $sq5.text() === 'O' && $sq6.text() === 'O' || 
               $sq7.text() === 'O' && $sq8.text() === 'O' && $sq9.text() === 'O' ||
               $sq1.text() === 'O' && $sq4.text() === 'O' && $sq7.text() === 'O' ||
               $sq2.text() === 'O' && $sq5.text() === 'O' && $sq8.text() === 'O' ||
               $sq3.text() === 'O' && $sq6.text() === 'O' && $sq9.text() === 'O' ||
               $sq1.text() === 'O' && $sq5.text() === 'O' && $sq9.text() === 'O' ||
               $sq7.text() === 'O' && $sq5.text() === 'O' && $sq3.text() === 'O' )
               {
                $("#result").text(' Player 1 : O is the winner'); // this Jquery method will add winner message
                return true;
            }else if( $sq1.text() === 'X' && $sq2.text() === 'X' && $sq3.text() === 'X' || // This function finds winning combinations for player2 X
                      $sq4.text() === 'X' && $sq5.text() === 'X' && $sq6.text() === 'X' || 
                      $sq7.text() === 'X' && $sq8.text() === 'X' && $sq9.text() === 'X' ||
                      $sq1.text() === 'X' && $sq4.text() === 'X' && $sq7.text() === 'X' ||
                      $sq2.text() === 'X' && $sq5.text() === 'X' && $sq8.text() === 'X' ||
                      $sq3.text() === 'X' && $sq6.text() === 'X' && $sq9.text() === 'X' ||
                      $sq1.text() === 'X' && $sq5.text() === 'X' && $sq9.text() === 'X' ||
                      $sq7.text() === 'X' && $sq5.text() === 'X' && $sq3.text() === 'X' )
                      {
                $("#result").text("player 2 : X is the winner"); // this Jquery method will add winner message
                return true;
            }else if(countTurn === 9){   // problem showing the message"draw" at the beginning game & before the game has winner. this if statement is for fixing this problem.
                $("#result").text("Draw");  // this Jquery method will add winner message
            } 
        }
        $('.box').on('click', function(){
            if($(this).text() !== ""){  // problem boxes can be clicked multiple time. fix by this if statement.
            return;
            }
            if(judgeGame() === true){ //  fixing from if the game has winner tune 5 to turn 8, remaining empty boxes can be clicked.
            return;
            }
            if(player1Turn() === true){   // adding "0" to box(div)
            $(this).text(player1); 
            
            }else{
            $(this).text(player2);  // adding "X" to box(div)
            
            }
            judgeGame();                // finding winner from judgeGame function
            countTurn = countTurn + 1    // this pass to the next turn.
        })
    
        $('button').on('click', function(){ // reset button 
        $('.box').text('');     // clearing all boxes div text
        $("#result").text("");   // clearing result message
        countTurn =1            // set count back to 1
        })
    }
);