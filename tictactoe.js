let gameBoardModule= (function(){
    let gameBoard = [];
    return {};
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
let createPlayer = (playerName,playerNumber,assignedXO) => {
    let getPlayerName = () => { playerName;
        console.log("This is the name of player" + playerNumber + "...." + playerName);}
        return{getPlayerName,playerName,playerNumber,assignedXO};
    };
    let Justin = createPlayer("Justin",1,"X");
    let James = createPlayer("James",2,"O");

