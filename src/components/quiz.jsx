import react from "react";
import React from "react";
import { MyContext } from "../context";
let count = 0



function QuizHtml(props){
    const {quiz, questions, gameOver /*count, addPoints*/} = React.useContext(MyContext)
    // const [answers, setAnswers] = React.useState([])
    let match
    

    const [styles, setStyles] = React.useState({
        padding: '4px 15px',
        marginRight: '0.75em',
        background: 'transparent',
        borderRadius: '8px',
        border: '1px solid #4D5B9E',
        cursor: 'pointer',
        color: '#293264'
    })
    const [answers, setAnswers] = React.useState([])

    const selected = {
            background: '#D6DBF5',
            border: 'transparent',
            padding: '4px 15px',
            marginRight: '0.75em',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#293264'
    }

    const correctStyles = {
        background: '#94D7A2',
            border: 'transparent',
            padding: '4px 15px',
            marginRight: '0.75em',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#293264'
    }

    const wrongStyles = {
            background: '#F8BCBC',
            border: 'transparent',
            padding: '4px 15px',
            marginRight: '0.75em',
            borderRadius: '8px',
            cursor: 'pointer',
            color: '#293264',
            opacity: 0.75
    }

    const [currentAnswer, setCurrentAnswer] = React.useState('')

    function select(id){
        setCurrentAnswer(prevAnswer => prevAnswer = id)
        
    }
    
    // React.useEffect(function(){
    //     console.log(currentAnswer)
    // }, [currentAnswer])
    function addPoint(){
        match = props.answers.find(answ => answ.answer == currentAnswer.answer )
        if (match != undefined){
            match.correct ? count += 1 : ''
        }
        
        // console.log(match)
        // console.log(count)
    }
    
    gameOver ? addPoint() : ''
    gameOver ? '' : count = 0

    // console.log(props.answers)
   return (
       props.answers.length > 0 ? <div className="quiz" key={props.id}>
       <div className="question">
           <p>{props.question}</p>
       </div>
       <div className="answers">
           <button disabled={gameOver} onClick={() => select(props.answers[0])} style={gameOver ? currentAnswer.answer == props.answers[0].answer ? currentAnswer.correct == true ? correctStyles : wrongStyles : styles : currentAnswer.answer == props.answers[0].answer ? selected : styles} className="answer" key={props.answers[0].id}>{props.answers[0].answer}</button>
           <button disabled={gameOver} onClick={() => select(props.answers[1])} style={gameOver ? currentAnswer.answer == props.answers[1].answer ? currentAnswer.correct == true ? correctStyles : wrongStyles : styles : currentAnswer.answer == props.answers[1].answer ? selected : styles} className="answer" key={props.answers[1].id}>{props.answers[1].answer}</button>
           <button disabled={gameOver} onClick={() => select(props.answers[2])} style={gameOver ? currentAnswer.answer == props.answers[2].answer ? currentAnswer.correct == true ? correctStyles : wrongStyles : styles: currentAnswer.answer == props.answers[2].answer ? selected : styles} className="answer" key={props.answers[2].id}>{props.answers[2].answer}</button>
           <button disabled={gameOver} onClick={() => select(props.answers[3])} style={gameOver ? currentAnswer.answer == props.answers[3].answer ? currentAnswer.correct == true ? correctStyles : wrongStyles : styles: currentAnswer.answer == props.answers[3].answer ? selected : styles} className="answer" key={props.answers[3].id}>{props.answers[3].answer}</button>
       </div>
   </div> : ''
    )
}

export  {QuizHtml, count}

/* <button onClick={() => select(props.answers[0])} style={gameOver ? currentAnswer.answer == props.answers[0].answer ? currentAnswer.correct == true ? correctStyles : wrongStyles : styles : currentAnswer.answer == props.answers[0].answer ? selected : styles} className="answer" key={answers[0].id}>{props.answers[0].answer}</button>
           <button onClick={() => select(props.answers[1])} style={gameOver ? currentAnswer.answer == props.answers[1].answer ? currentAnswer.correct == true ? correctStyles : wrongStyles : styles : currentAnswer.answer == props.answers[1].answer ? selected : styles} className="answer" key={answers[1].id}>{props.answers[1].answer}</button>
           <button onClick={() => select(props.answers[2])} style={gameOver ? currentAnswer.answer == props.answers[2].answer ? currentAnswer.correct == true ? correctStyles : wrongStyles : styles: currentAnswer.answer == props.answers[2].answer ? selected : styles} className="answer" key={answers[2].id}>{props.answers[2].answer}</button>
           <button onClick={() => select(props.answers[3])} style={gameOver ? currentAnswer.answer == props.answers[3].answer ? currentAnswer.correct == true ? correctStyles : wrongStyles : styles: currentAnswer.answer == props.answers[3].answer ? selected : styles} className="answer" key={answers[3].id}>{props.answers[3].answer}</button> */