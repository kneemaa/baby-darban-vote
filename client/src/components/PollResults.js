import React from "react"

export const PollResults = (props) => {
  return (
      <div>
        <h2> Poll Results! </h2>
        <p>Boys: {props.boys}</p>
        <p>Girls: {props.girls}</p>
        {/* maybe something like this? https://canvasjs.com/react-charts/bar-chart/ */}
      </div>
    )
}
