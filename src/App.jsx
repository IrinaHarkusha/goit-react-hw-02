import "modern-normalize"
import "./App.css"
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import {useEffect, useState} from "react"
import Notification from "./components/notification/Notification";

const data = {good: 0, neutral: 0, bad: 0}


function App () {
  const [state, setState] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("todo-data"));
    if (savedData) {
      return savedData;
    } else {
      return data;
    }});

  useEffect(() => window.localStorage.setItem('todo-data', JSON.stringify(state)), [state]);
  

  const handleVote = value => {
    setState(prev => ({...prev, [value]: prev[value] + 1 }))
  }
  const handleDelete = () => {
    setState({good: 0, neutral: 0, bad: 0})
  }

  const totalFeedback = state.good + state.neutral + state.bad
  const positive = Math.round((state.good / totalFeedback) * 100)
 
  return (
    <div className="container">
      <Description />
      <Options handleVote={handleVote} handleDelete={handleDelete} totalFeedback={totalFeedback} />
       {totalFeedback ? <Feedback totalFeedback={totalFeedback}  positive={positive} state={state} /> : <Notification/>} 
    </div>
  );
}

export default App
