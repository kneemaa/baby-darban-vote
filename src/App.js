import logo from './logo.svg';
import './App.css'
import { CountDownTimer } from './components/CountDownTimer'
import { PollQuestion } from './components/PollQuestion'
import { PollResults } from './components/PollResults'

function App() {

  const hoursMinSecs = {days: 0, hours: 0, minutes: 0, seconds: 0 }

  return (
    <div className="App">
      <CountDownTimer hoursMinSecs={hoursMinSecs}/>
      <PollQuestion/>
      <PollResults/>
    </div>
  );
}

export default App
