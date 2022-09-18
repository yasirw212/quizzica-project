import React from "react";
import { MyContext } from "../context";

function StartQuiz(props){
    const {getQuestions, final} = React.useContext(MyContext)
    

    return (
        <div className="front-page">
            <h2 className="title">Quizzical</h2>
            <p className="subtitle">Some description if needed</p>
            <button onClick={() => getQuestions(final)} className="start-btn">Start quiz</button>
        </div>
    )
}

export default  StartQuiz