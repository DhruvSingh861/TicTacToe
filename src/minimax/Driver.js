 class Move{
    constructor(){
        let row,col;
    }
}
 
let me = 'x', you = 'o';
 
function isMovesLeft(board){
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++)
            if (board[i][j] == '_')
                return true;
    return false;
}
 

function check(b){
    for(let row = 0; row < 3; row++){
        if (b[row][0] == b[row][1] && b[row][1] == b[row][2]){
            if (b[row][0] == me)
                return +10;
                 
            else if (b[row][0] == you)
                return -10;
        }
    }
    for(let col = 0; col < 3; col++){
        if (b[0][col] == b[1][col] && b[1][col] == b[2][col]){
            if (b[0][col] == me)
                return +10;
  
            else if (b[0][col] == you)
                return -10;
        }
    }
    if (b[0][0] == b[1][1] && b[1][1] == b[2][2]){
        if (b[0][0] == me)
            return +10;
             
        else if (b[0][0] == you)
            return -10;
    }
    if (b[0][2] == b[1][1] && b[1][1] == b[2][0]){
        if (b[0][2] == me)
            return +10;
             
        else if (b[0][2] == you)
            return -10;
    }
    return 0;
}
 

function minimax(board, depth, isMax){
    let score = check(board);
    if (score == 10)
        return score-depth;
  
    if (score == -10)
        return score+depth;
  
    if (isMovesLeft(board) == false)
        return 0;
  
    if (isMax){
        let best =-Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if (board[i][j]=='_'){
                    board[i][j] = me;
                    best = Math.max(best, minimax(board,depth + 1, !isMax));
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
    else{
        let best = Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if (board[i][j] == '_'){
                    board[i][j] = you;
                    best = Math.min(best, minimax(board,depth + 1, !isMax));
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
}
function solve(board){
    let bestVal = -Infinity;
    let bestMove = new Move();
    bestMove.row = -1;
    bestMove.col = -1;
  
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if (board[i][j] == '_'){
                board[i][j] = me;
                let moveVal = minimax(board, 0, false);
                board[i][j] = '_';
                if (moveVal > bestVal){
                    bestMove.row = i;
                    bestMove.col = j;
                    bestVal = moveVal;
                }
            }
        }
    }
    return bestMove;
}
 
function Driver(board){
let bestMove = solve(board);
 return bestMove;
}

 
export {Driver,check}