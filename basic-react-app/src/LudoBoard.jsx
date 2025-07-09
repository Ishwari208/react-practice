import { useState } from "react";

export default function LudoBoard(){
    let [moves,setMoves]=useState({Blue:0,yellow:0,red:0,green:0});

    let updateBlue=()=>{
       
        console.log(`moves.blue=${moves.Blue}`);
        setMoves({...moves, Blue:moves.Blue+=1});{/*if not spread the ui component will not rerender because
            the address of object dosent change when the key is changed only therefore the copay created with
            spread to rerender */}

    }
    let updateyellow=()=>{
       
        console.log(`moves.blue=${moves.yellow}`);
        setMoves({...moves, yellow:moves.yellow+=1});
    }
     let updategreen=()=>{
       
        console.log(`moves.green=${moves.green}`);
        setMoves({...moves, green:moves.green+=1});
    } 
    let updatered=()=>{
       
        setMoves({...moves, red:moves.red+=1});
    }
    return (
        <div>
           <p>Game Begins!</p> 
           <div className="board">
            <p >Blue moves={moves.Blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
               <p>yellow moves={moves.yellow}</p>
            <button style={{backgroundColor:"yellow",color:"black"} } onClick={updateyellow}>+1</button>
               <p>red moves={moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>
               <p>green moves={moves.red}</p>
               {/*access the object keys through moves.blue in use state*/} 
            <button style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
           </div>
        </div>
    )
}