import React from 'react'
import StartQuiz from './components/startQuiz'
import { MyContext } from './context'
import {QuizPage, final} from './components/quizPage'
import {Footer} from './components/footer'

function App(props) {
  const {quiz, getList} = React.useContext(MyContext)
  let styles = getList ? {
    display: 'block'
} : {
  display: 'none'
}

let startStyles = getList ? {
  display: 'none'
} : {
display: 'block'
}

  
  return (
    
    <div className='main-container'>
       {/* {
         quiz ?  */}
         <div className="quiz-container" id='quiz' style={styles}>
            <QuizPage /> 
         </div>
         {/* : */}
         <div id='start' style={startStyles}>
            <StartQuiz />
          </div>
    </div>
  )
}

export default App
