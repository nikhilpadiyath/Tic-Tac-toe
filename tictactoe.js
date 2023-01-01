let gameBoardModule= (function(){
    let gameBoard = [];
    let playerArray = [];
    let makePlayerMove = () => {
        if(gameBoard.length == 0){
            alert("Player 1, make your move!");
            gameBoard.push(playerArray[2]);
        } else if(gameBoard[gameBoard.length-1]== "X"){
            alert("Player 2, make your move!");
            gameBoard.push(playerArray[5]);
        } else if(gameBoard[gameBoard.length-1]=="O"){
            alert("Player 1, make your move!");
            gameBoard.push(playerArray[2]);
        }
    };
    return {gameBoard,playerArray,makePlayerMove};
})();
let displayControlModule = (function(){
   const makeMove = document.querySelectorAll(".select");
   let index=0;
   makeMove.forEach(makeMoves=>{
    makeMoves.dataset.linkedButton = index;
    makeMoves.addEventListener("click",renderArrayToScreen);
    function renderArrayToScreen(){
        const gridBoxes= document.querySelectorAll(".gridbox");
        let index=0;
        gridBoxes.forEach(gridBox=>{
            gridBox.dataset.linkedButton = index;
            if(gridBox.getAttribute("data-linked-button")==makeMoves.getAttribute("data-linked-button")){
                gridBox.textContent = gameBoardModule.gameBoard[gameBoardModule.gameBoard.length-1];
                console.log("show me makeMoves linked button value...",makeMoves.dataset.linkedButton);
                console.log("show me gridBox linked button value...",gridBox.dataset.linkedButton);
            }
            index++;
        })
    }
    index++;
   })
})();
let createPlayer = () => {
    for(let i=0; i<4; i++){
        if(gameBoardModule.playerArray.length>=6){
            gameBoardModule.makePlayerMove();
            break;
        } else if(gameBoardModule.playerArray.length==0){
            let playerName = prompt("What is your name?");
            if(playerName=="" || platerName== null){
                alert ("Sorry! Name cannot be blank");
                continue;
            }
            let playerNumber=1;
            let assignedXO="X";
            alert ("You are player 1, and your assigned letter is X");
            gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
            console.log("Show me the contents of playerArray...", gameBoardModule.playerArray);
        } else if(gameBoardModule.playerArray.length!==0){
        let playerName= prompt("What is your name?");
        if(playerName=="" || platerName== null){
            alert ("Sorry! Name cannot be blank");
            continue;
        }
        let playerNumber=2;
        let assignedXO= "O";
        alert ("You are plater 2 and your assigned letter is O");
        gameBoardModule.playerArray.push(playerName,playerNumber,assignedXO);
        console.log("Show me the contents of playerArray...",gameBoardModule.playerArray);
        }
        }
    };



