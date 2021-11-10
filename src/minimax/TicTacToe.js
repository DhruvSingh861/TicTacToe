import React, { useState } from 'react';
import './TicTacToe.css'
import {Driver,check} from './Driver';
import { Button,Alert} from 'reactstrap';



const TicTacToe=()=>{

    

    const ALERT=()=>{
    }



    const [board,setBoard]=useState([['_','_','_'],['_','_','_'],['_','_','_']]);
    const[result,setResult]=useState();
    const handleClick=(props)=>{
        if(board[props.num.numr][props.num.numc]!='_'){
            alert("place is already filled !!!");
            ALERT();
            return;
        }
        board[props.num.numr][props.num.numc]='o';
        let bestMove=Driver(board);
        if(bestMove.row!=-1)
        board[bestMove.row][bestMove.col]='x';
        document.getElementById(props.num.numr+"-"+props.num.numc).innerHTML="o";
        if(bestMove.row!=-1)
        document.getElementById(bestMove.row+"-"+bestMove.col).innerHTML="x";
        if(check(board)==10){
            document.getElementById("tabl").style.pointerEvents="none";
            setResult("YOU LOSE");
            return;
        }
        if(check(board)==-10){
            setResult("YOU WIN");
            return;
        }
        if(bestMove.row==-1){
            setResult("IT'S A DRAW");
            return;
        }
    }
    const handleRestart=()=>{
        setResult("");
        setBoard([['_','_','_'],['_','_','_'],['_','_','_']]);
        document.getElementById("tabl").style.pointerEvents="all";
    }

    const Cell=(props)=>{
        if (board[props.num.numr][props.num.numc]=="_")
        return <td onClick={
            ()=>{handleClick(props);}
        }><h1  id={props.num.numr+"-"+props.num.numc}></h1></td>
        else
        return <td onClick={
            ()=>{handleClick(props);}
        }><h1  id={props.num.numr+"-"+props.num.numc}>{board[props.num.numr][props.num.numc]}</h1></td>
    }
    return (
        <div>
            <Alert><h1>Tic Tac Toe</h1></Alert>
            <table className="container" id="tabl">
                <body>
                    <tr>
                        <Cell num={{numr:0, numc:0}}/>
                        <Cell num={{numr:0, numc:1}}/>
                        <Cell num={{numr:0, numc:2}}/>
                    </tr>
                    <tr>
                        <Cell num={{numr:1, numc:0}}/>
                        <Cell num={{numr:1, numc:1}}/>
                        <Cell num={{numr:1, numc:2}}/>
                    </tr>
                    <tr>
                        <Cell num={{numr:2, numc:0}}/>
                        <Cell num={{numr:2, numc:1}}/>
                        <Cell num={{numr:2, numc:2}}/>
                    </tr>
                </body>
            </table>
            {result &&(
                <>
                <p id="res"><h3>{result}</h3></p>
                <Button color="danger" onClick={()=>handleRestart()}><h4>Try Again</h4></Button>
                </>
            )}
        </div>
    )
}
export default TicTacToe