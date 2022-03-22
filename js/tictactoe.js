$(document).ready(function (){


    /// always start with "O" then "X"
    const player1 = "O";
    const player2 = "X";
    ///// turn 1 3 5 then player1 ||| 2 4 6 is player2 turn

    let countTurn = 1;
    const player1Turn = function(){ ///this function will find player1 turn or not
        if(countTurn % 2 === 0){
            return false;
        }else{
            return true;
        }            // let countTurn = countTurn % 2;
            // return countTurn == 1;
    }



    
    $('.box').on('click', function(){
        if($(this).text() !== ""){
            return;
        }
        // // add if statement which $(this).text which is $(.box) has text already then return nothing
    //    let currentSq = this
       console.log($(this).text());
        if(player1Turn()){
            $(this).text(player1);
        }else{
            $(this).text(player2);
        }
        countTurn = countTurn + 1
        

    })
    



    ///css selector with Jquery
    const $sq1 = $('#sq1')
    const $sq2 = $('#sq2')
    const $sq3 = $('#sq3')
    const $sq4 = $('#sq4')
    const $sq5 = $('#sq5')
    const $sq6 = $('#sq6')
    const $sq7 = $('#sq7')
    const $sq8 = $('#sq8')
    const $sq9 = $('#sq9')

////first click happen X is located and 


//// 






});