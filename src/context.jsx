import React from "react";
import {nanoid} from "nanoid"


const MyContext = React.createContext()

function MyContextProvider(props){
    const [quiz, setQuiz] = React.useState(false)
    const [count, setCount] = React.useState(0)
    const [questions, setQuestions] = React.useState([])
    const [gameOver, setGameOver] =  React.useState(false)
    const [getList, setGetList] = React.useState(false)
    const [footer, setFooter] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    let question
    let answers = []
    let final = []

    const addItem = (item) => setQuestions(prevQuestions => [...prevQuestions, item])

    function getQuestions(item){
        setLoading(prev => prev = true)
        setGetList(prevList => !prevList)
        setTimeout(function(){
            setLoading(prev => prev = false)
        }, 2000)
    }

    function setList(){
        setGetList(prevList => !prevList)
    }

    function resetGame(a){
        setQuiz(prevQuiz => prevQuiz = !prevQuiz)
        setLoading(true)
        setFooter(false)
        setTimeout(function(){
            setGameOver(false)
            setLoading(false)
        }, 2000)
    }

    function endGame(){
        setGameOver(true)
        setFooter(true)
    }

    function addPoints(){
        React.useEffect(function(){
            setCount(prevCount => prevCount += 1)
        }, [])
        console.log(count)
    }

    function finalQuestion(item){
        setQuestions(prevList => prevList = item)
        console.log(questions)
    }

    return (
        <MyContext.Provider value={{getQuestions: getQuestions, questions: questions, quiz: quiz, count: count, gameOver: gameOver, endGame: endGame, addPoints: addPoints, final: final, getList: getList, setList: setList, resetGame: resetGame, finalQuestion: finalQuestion, setQuestions: setQuestions, footer: footer, setFooter: setFooter, loading}}>
            {props.children}
        </MyContext.Provider>
    )
}

export {MyContextProvider, MyContext}