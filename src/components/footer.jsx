import React from "react";
import { MyContext } from "../context";
import { count} from "./quiz";

function Footer(props){
    const {gameOver, endGame, resetGame, getList, setList, footer} = React.useContext(MyContext)
    
   

    return (
        <div className="footer">
            {footer ? 
            <div className="reset-game">
                <p className="score">{`You scored ${count}/5 correct answers`}</p>
            <button onClick={() => resetGame()} className="replay-btn">Play again</button>
            </div> 
            : <button onClick={() => endGame(count)} className="end-btn">Check answers</button>}
       </div>
    )
}

export {Footer}