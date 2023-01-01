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
    function checkWin(player){
        const horizontal= [0,3,6].map(i=>{return[i,i+1,i+2]});
        const vertical= [0,1,2].map(i=>{return[i,i+3,i+6]});
        const diagonal= [[0,4,8],[2,4,6]];
        let allwins= [].concat(horizontal).concat(vertical).concat(diagonal);
        let results= allwins.some(indices=>{
            return gridBoxes[indices[0]].textContent == player && gridBoxes[indices[1]].textContent == player && gridBoxes[indices[2]].textContent == player
        })
        return results;
    }
    if(checkWin("X")== true){
        console.log(gameBoardModule.playerArray[0]," Wins!");
        const body = document.querySelector("body");
        const playerWinMessage=document.createElement("h1");
        playerWinMessage.textContent=(gameBoardModule.playerArray[0] + " Wins!");
        body.appendChild(playerWinMessage);
        makeMove.forEach(makeMoves=>{
            makeMoves.remove();
        });
        startGameButton.remove();
        return;
    } else if(checkWin("O")==true){
        console.log(gameBoardModule.playerArray[3], "Wins!");
        const body = document.querySelector("body");
        const playerWinMessage=document.createElement("h1");
        playerWinMessage.textContent=(gameBoardModule.playerArray[3] + " Wins!");
        body.appendChild(playerWinMessage);
        makeMove.forEach(makeMoves=>{
            makeMoves.remove();
        });
        startGameButton.remove();
        return;
    } else if(gameBoardModule.gameBoard.length==9){
        console.log("Tie!");
        const body = document.querySelector("body");
        const playerWinMessage=document.createElement("h1");
        playerWinMessage.textContent=("Tie!");
        body.appendChild(playerWinMessage);
        makeMove.forEach(makeMoves=>{
            makeMoves.remove();
        });
        startGameButton.remove();
        return;
    }



