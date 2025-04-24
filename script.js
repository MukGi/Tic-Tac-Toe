let _2DgameBoard = [['','',''],
                 ['','',''],
                 ['','',''],]
let _1DgameBoard = ['','','',
                  '','','',
                  '','','',
]
const winCons = [
                /**Row Win Cons */
                [0,1,2],
                [3,4,5],
                [6,7,8],

                /**Column Win Cons */
                [0,3,6],
                [1,4,7],
                [2,5,8],

                /**Diagonal Win Cons */
                [0,4,8],
                [2,4,6]]

const Player1 = 'X'
const Player2 = 'O'
let currentPlayer = Player1;
            
/**Multi-Dimensional game Board */
/**
 * 
let player1 =true
let player2 =false


function checkPlayerTurn() {
    if (player1==true) {
        console.log("It is Player 1's turn")
    }
    else {
        console.log("It is Player 2's turn");
        }

   
}
function play(row,col){
    checkPlayerTurn()
    if (player1 == true) {
        if (_2DgameBoard[row][col]==='') {
               _2DgameBoard[row][col] = 'X'

           }
           player1 = false
           player2 = true
    }
    console.log('check')
    
    if(player2 == true){
               if (_2DgameBoard[row][col]==='') {
                   _2DgameBoard[row][col] = 'O'
           
                   player2 = false
                   player1 = true
               }
               checkPlayerTurn()
           }
       
    
    console.log(_2DgameBoard)

}

function winConditoin(params) {
    
}
 * 
 */




function winCheck() {
    for(i=1; i<=winCons.length; i++){
        console.log(`Wh: ${i}`)
        winCons[i].forEach((con)=>{
            console.log(_1DgameBoard[con])
        })
        
    }
    
}

function changePlayer(){
currentPlayer = (currentPlayer == Player1)? Player2: Player1
}
function play(pos) {
    if(_1DgameBoard[pos]===''){
        _1DgameBoard[pos]=currentPlayer

        changePlayer()
    }

    console.log(_1DgameBoard)
}
