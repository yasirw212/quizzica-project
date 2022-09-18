import React from "react";
import {QuizHtml} from "./quiz";
import { MyContext } from "../context";
import {nanoid} from "nanoid"
import react from "react";
import {Footer} from "./footer";
import {Loading} from "./loading"
let renderQuestions
let final = []

function QuizPage(props){
    let question
    let results
    let answers = []
    
    const {quiz, setList, getlist, loading} = React.useContext(MyContext)
    
    function generateWrongObject(ques){
        return {
            answer: ques,
            correct: false,
            id: nanoid()
        }
    }

    function generateCorrectObject(ques){
        return {
            answer: ques,
            correct: true,
            id: nanoid()
        }
    }

       function shuffle(array){
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
            }

    
 React.useEffect(function(){
 fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
            .then(response => response.json())
            .then(data =>{
                    console.log(data.results)
                    results = data.results 
                    
            }) 
            setTimeout(function(){
                results.map(ques =>{
                    answers = []
                    const wrongAnswers = ques.incorrect_answers
                    let correctAnswer =  ques.correct_answer
    
                    question = ques.question
                    
                    for  (let num of  wrongAnswers){
                        num = generateWrongObject(num)
                        answers.push(num)
                    }
                    correctAnswer = generateCorrectObject(correctAnswer)
                    answers.push(correctAnswer)
                    answers = shuffle(answers)
                    answers.unshift(question)
                    final.push(answers)
                })
                console.log(final.slice(0,5))
                // setList()
                renderQuestions = final.splice(0,5).map(ques =>{
                    console.log(ques.slice(1,5,''))
                 
                    return (
                            <QuizHtml answers={ques.slice(1, 5)} id={nanoid()} question={ques[0]}/>
                    ) 
                }) 
        
            }, 400) 
   },[quiz]) 
        
  
 
    return (
        loading ? <Loading />
        :
        <div className="quiz-page" id="quiz" >
            {renderQuestions}
            <div>
                <Footer />
            </div>
            </div>
    )
}

export {QuizPage, final}