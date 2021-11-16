import React from "react"

export const CountDownTimer = ({hoursMinSecs}) => {
  const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime()

  const { 
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = hoursMinSecs

  const [[dys,hrs,mins,secs], setTime] = React.useState([days,hours,minutes,seconds])

  const tick = () => {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var dys = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((distance % (1000 * 60)) / 1000);  

    if (dys === 0 && hrs === 0 && mins === 0 && secs === 0)
      reset()
    else {
      setTime([dys,hrs, mins, secs])
    }
  }

  const reset = () => setTime([parseInt(days)],[parseInt(hours), parseInt(minutes), parseInt(seconds)])

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000)
    return () => clearInterval(timerId)
  })

  return (
    <div>
      <p>{`${dys.toString().padStart(2, '0')}:${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
    </div>
  )
}
