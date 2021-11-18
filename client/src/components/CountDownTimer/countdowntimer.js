
import React from 'react'
import Countdown from 'react-countdown'
import "./countdowntimer.css"

export const CountDownTimer = (props) => {
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span className="Countdown">{(days * 24) + hours} hours and {minutes}:{seconds}</span>;
    }
  }

  return (
    <Countdown daysInHours={true} date={Date.now() + props.timeLeft} renderer={renderer}/>
  )
}
