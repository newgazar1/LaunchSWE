import React, {useState, useEffect} from "react";
import './App.css';

const getData = () => {
  return fetch('https://opentdb.com/api.php?amount=10')
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    return data;
  })
  .catch(error => console.log("Error"))
}

export default function App () {
  const [triviaDataJSON, setTriviaDataJSON] = useState('');
  const [triviaQuestions, setTriviaQuestions] = useState([]);

  useEffect (() => {
    getData().then(randomData => {
      setTriviaDataJSON(JSON.stringify(randomData) || 'Error') ;
      setTriviaQuestions(JSON.stringify(randomData.results[0].question) || 'Error');
    })
  }, []);
  console.log(triviaQuestions)
  return (
    
    <p>
      {triviaQuestions}
    </p>
  )
    
}

// var buttonPressed = instanceOfMouseEvent.button




// const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   fetch('https://opentdb.com/api.php?amount=10')
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //       setQuestions(res.results);
  //     })
  // }, []);
  // return (
  //   <div>
  //       <h1> Testing</h1>
  //       {questions.map((question) => (
  //         <h1> {question.question}</h1>
  //       ))}
  //   </div>
  // )


  // <button onClick = { () => { 
  //   getData()
  // }}> </button>