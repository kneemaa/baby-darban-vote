import React, { Component } from "react"
// import API from "../utils/api"

class PollResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boys: 0,
      girls: 0
    };
  }

  componentDidMount() {
    this.breakDownGender()
  }

  breakDownGender() {
    const genders = this.state.genders
    console.log(genders)
    for (let entry in genders) {
      if (genders[entry].gender === 'girl') {
        this.setState((state) => {
          return { girls: state.girls + 1}
        })
      }

      if (genders[entry].gender === 'boy') {
        this.setState((state) => {
          return { boys: state.boys + 1}
        })
      }
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.girls}</p>
        {/* maybe something like this? https://canvasjs.com/react-charts/bar-chart/ */}
      </div>
    )
  }
}

export default PollResults

