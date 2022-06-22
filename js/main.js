var turn = true; //?whit this variable we can know whose turn is it
var sign; //?this is the sing of the player
var dark = false; //?whit this variable we can know if the dark mode is activated
/**This function allows us change the turn */
function changeTurn(){
    if(turn == true){
        sign = "X";
        turn = false;
    }else{
        sign = "O"
        turn = true;
    }
}
$(function(){
    //?whit this function write the sing on the pressed button
    $(".btn").click(function(){
        if(turn == true){
            if($(this).val().length == 0){ //!we only can write if the box is empty
                $(".information").text("Turn: " + sign); //?whit this funcion we can write the sign of the player who has the turn in the upper part
                $(this).val("X");
                changeTurn(); //?after writing the turn is changed
            }  
        }
        else{
            if($(this).val().length == 0){ //!we only can write if the box is empty
                $(".information").text("Turn: " + sign); //?whit this funcion we can write the sign of the player who has the turn in the upper part
                $(this).val("O");
                changeTurn(); //?after writing the turn is changed
            }
        }
        endGame(); //?check if the game is over
    })
});
$(function(){
    $("#dark-mode").click(function(){ //?whit this function we can change the lighting mode
        if(dark == false){ //?if dark mode is not activated 
            $("#dark-mode img").attr("src","./img/lightbulb-solid.svg"); //?we change the icon to the moon
            darkMode();
            dark = true;
        }else{ //?if dark mode is activated
            $("#dark-mode img").attr("src","./img/moon-solid.svg"); //?we change the mode to the light bulb
            lightMode();
            dark = false;
        }
    });
    //?whit this function we can reload the page
    $("#reload").click(function(){
        location.reload();
    });
})
/**This function allows us count the empty cells */
function check(){
    let count = 0;
    let btns = document.querySelectorAll(".btn");
    btns.forEach(function(element){
        if(element.value.length > 0){
            count++;
        }
    });
    return count;
}
/**This function allows us to know when the game is over */
function endGame(){
    let buttons = document.querySelectorAll('input');
    if(buttons[0].value == buttons[4].value && buttons[0].value == buttons[8].value && buttons[0].value.length > 0){
        printSolve(buttons[0],buttons[4],buttons[8]);
        alert("The player " + sign + " has won");
    }
    else if(buttons[2].value == buttons[4].value && buttons[2].value == buttons[6].value && buttons[2].value.length > 0){
        printSolve(buttons[2],buttons[4],buttons[6]);
        alert("The player " + sign + " has won");
    }
    else if(buttons[0].value == buttons[1].value && buttons[0].value == buttons[2].value && buttons[0].value.length > 0){
        printSolve(buttons[0],buttons[1],buttons[2]);
        alert("The player " + sign + " has won");
    }
    else if(buttons[3].value == buttons[4].value && buttons[3].value == buttons[5].value && buttons[3].value.length > 0){
        printSolve(buttons[3],buttons[4],buttons[5])
        alert("The player " + sign + " has won");
    }
    else if(buttons[6].value == buttons[7].value && buttons[6].value == buttons[8].value && buttons[6].value.length > 0){
        printSolve(buttons[6],buttons[7],buttons[8])
        alert("The player " + sign + " has won");
    }
    else if(buttons[0].value == buttons[3].value && buttons[0].value == buttons[6].value && buttons[0].value.length > 0){
        printSolve(buttons[0],buttons[3],buttons[6])
        alert("The player " + sign + " has won");
    }
    else if(buttons[1].value == buttons[4].value && buttons[1].value == buttons[7].value && buttons[1].value.length > 0){
        printSolve(buttons[1],buttons[4],buttons[7])
        alert("The player " + sign + " has won");
    }
    else if(buttons[2].value == buttons[5].value && buttons[2].value == buttons[8].value && buttons[2].value.length > 0){
        printSolve(buttons[0],buttons[4],buttons[8])
        alert("The player " + sign + " has won");
    }
    else if(check() == 9){ //?if all the cells are fulls but no one has won it is considered a draw
        alert("Draw");
        $(".btn").css('background-color','#e63946');
    }
}
/**This function change the background color of the cells where the three in a row is */
function printSolve(x,y,z){
    $(x).css('background-color','#80ed99');
    $(y).css('background-color','#80ed99');
    $(z).css('background-color','#80ed99');
}
/**This function change the interface to dark mode */
function darkMode(){
    $("body").css('background-color', '#023047');
    $(".btn").css('background-color','#8ecae6');
}
/**This function change the interfaze to light mode */
function lightMode(){
    $("body").css('background-color', '#f1faee');
    $(".btn").css('background-color','#a8dadc');
}
