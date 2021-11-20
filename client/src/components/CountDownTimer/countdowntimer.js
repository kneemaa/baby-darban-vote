
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
      return <div className="count-down-timer container">
              <div className="row">
                <div className="col-sm-12 countdown-title">
                  <p className="countdown-title"> Check back in ... </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-1 time-labels">
                  <p className="count-down-label days">Days</p>
                </div>
                <div className="col-lg-3 col-sm-1 time-labels">
                  <p className="count-down-label hours">Hours</p>
                </div>
                <div className="col-lg-3 col-sm-1 time-labels">
                  <p className="count-down-label minutes">Minutes</p>
                </div>
                <div className="col-lg-3 col-sm-1 time-labels">
                  <p className="count-down-label seconds">Seconds</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-3 time-values">
                  <p className="count-down-number">{days}</p>
                </div>
                <div className="col-lg-3 col-sm-3 time-values">
                  <p className="count-down-number">{hours}</p>
                </div>
                <div className="col-lg-3 col-sm-3 time-values">
                  <p className="count-down-number">{minutes}</p>
                </div>
                <div className="col-lg-3 col-sm-3 time-values">
                  <p className="count-down-number">{seconds}</p>
                </div>
              </div>
            </div>
    }
  }

  return (
    <Countdown daysInHours={true} date={Date.now() + props.timeLeft} renderer={renderer}/>
  )
}
