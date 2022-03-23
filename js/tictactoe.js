$(document).ready(function (){
    /// always start with "O" then "X"
    const player1 = "O";
    const player2 = "X";

    const $sq1 = $('#sq1')
    const $sq2 = $('#sq2')
    const $sq3 = $('#sq3')
    const $sq4 = $('#sq4')
    const $sq5 = $('#sq5')
    const $sq6 = $('#sq6')
    const $sq7 = $('#sq7')
    const $sq8 = $('#sq8')
    const $sq9 = $('#sq9')

    // console.log($sq1);
    // console.log(($sq1).text());
    // console.log($('#sq1').text);
    ///// turn 1 3 5 then player1 ||| 2 4 6 are player2 turn

    let countTurn = 1;
    const player1Turn = function(){ ///this function will find player1 turn or not
        if(countTurn % 2 === 0){
            return false;
        }else{
            return true;
        }            // let countTurn = countTurn % 2;
                     // return countTurn == 1;
    }
    const judgeGame = function(){
        // if($(this).text() !== ""){
            if($sq1.text() === 'O' && $sq2.text() === 'O' && $sq3.text() === 'O' ||
               $sq4.text() === 'O' && $sq5.text() === 'O' && $sq6.text() === 'O' || 
               $sq7.text() === 'O' && $sq8.text() === 'O' && $sq9.text() === 'O' ||
               $sq1.text() === 'O' && $sq4.text() === 'O' && $sq7.text() === 'O' ||
               $sq2.text() === 'O' && $sq5.text() === 'O' && $sq8.text() === 'O' ||
               $sq3.text() === 'O' && $sq6.text() === 'O' && $sq9.text() === 'O' ||
               $sq1.text() === 'O' && $sq5.text() === 'O' && $sq9.text() === 'O' ||
               $sq7.text() === 'O' && $sq5.text() === 'O' && $sq3.text() === 'O' )
               {
                $("#result").text(' Player 1 : O is the winner');
                return true;
            }else if( $sq1.text() === 'X' && $sq2.text() === 'X' && $sq3.text() === 'X' ||
                      $sq4.text() === 'X' && $sq5.text() === 'X' && $sq6.text() === 'X' || 
                      $sq7.text() === 'X' && $sq8.text() === 'X' && $sq9.text() === 'X' ||
                      $sq1.text() === 'X' && $sq4.text() === 'X' && $sq7.text() === 'X' ||
                      $sq2.text() === 'X' && $sq5.text() === 'X' && $sq8.text() === 'X' ||
                      $sq3.text() === 'X' && $sq6.text() === 'X' && $sq9.text() === 'X' ||
                      $sq1.text() === 'X' && $sq5.text() === 'X' && $sq9.text() === 'X' ||
                      $sq7.text() === 'X' && $sq5.text() === 'X' && $sq3.text() === 'X' )
                      {
                $("#result").text("player 2 : X is the winner");
                return true;
            }else if(countTurn === 9){
                $("#result").text("Draw game");
            } 
        // }
    }
    


    
    $('.box').on('click', function(){
        if($(this).text() !== ""){
            // console.log($(this).text());
            // console.log($(this));
            return;
        }
        if(judgeGame() === true){
            return;
        }
        if(player1Turn()){
            $(this).text(player1);
            
        }else{
            $(this).text(player2);
            
        }
        console.log(countTurn);
        judgeGame();
        countTurn = countTurn + 1
        
        
    })
    
    $('button').on('click', function(){
        $('.box').text('');
        $("#result").text("");
        countTurn =1
    })
}
);