import React, { Component } from "react"
import API from "../../utils/api"
import { PollResults } from "../../components/PollResults"
import PollQuestion from "../../components/PollQuestion"
import { CountDownTimer } from "../../components/CountDownTimer"
import "../../App.css"

class Home extends Component {
  state = {
    genders: [],
    girls: 0,
    boys: 0,
    timeLeft: 1000
  }

  componentDidMount() {
    this.loadResults()
    this.getTimeLeft()
  };

  loadResults = () => {
    API.getResults()
      .then(res => this.setState({genders: res.data}))
      .catch(err => console.log(err))
      .then(res => this.breakDownGender())
  }

  breakDownGender() {
    const genders = this.state.genders
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

  getTimeLeft() {
    const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime()
    let now = new Date().getTime();
    let distance = countDownDate - now;
    console.log(distance)
    this.setState({timeLeft: distance})
  }

  render() {
    return (
      <div>
        <CountDownTimer timeLeft={this.state.timeLeft}/>
        <PollQuestion/>
        <PollResults boys={this.state.boys} girls={this.state.girls}/>
      </div>
    )
  }
}

export default Home
