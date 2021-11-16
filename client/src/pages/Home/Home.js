import React, { Component } from "react"
import API from "../../utils/api"
import Chart from "../../components/Chart"
import { CircleTimer } from "../../components/CircleTimer"
import PollQuestion from "../../components/PollQuestion"
import {Announce} from "../../components/Announce"
// import { FormBtn, Input } from "../../components/Form"
import moment from "moment"
import Cookies from 'universal-cookie'
import "../../App.css"

class Home extends Component {
  state = {
    genders: [],
    girls: 0,
    boys: 0,
    timeLeft: 1000,
    gender: "",
    author: "",
    ballotCast: false,
    endTime: "2021-11-16 16:00:00"
  }

  componentDidMount() {
    this.loadResults()
    this.getTimeLeft()
  };

  loadResults = () => {
    API.getResults()
      .then(res => this.setState({genders: res.data, girls: 0, boys: 0, gender: "", author: ""}))
      .catch(err => console.log(err))
      .then(res => this.breakDownGender())

      const cookies = new Cookies()
      if (cookies.get('ballotCast')) {
        this.setState({ballotCast: true})
      }
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
    const announceTime = moment(this.state.endTime)
    const distance = announceTime.diff(moment(), "seconds")
    this.setState({timeLeft: distance})
  }

  handleTimeUpdate = (childData) => {
    this.setState({timeLeft: childData})
  }

  handleCastedVote = (childData) => {
    const cookies = new Cookies()
    this.setState(childData)
    this.loadResults()
    cookies.set('ballotCast', {path: '/'})
  }

  render() {
    return (
      <div>
        {this.state.timeLeft <= 0 ? (
          <div>
            {this.state.ballotCast ? (
              <div>
                <Chart boys={this.state.boys} girls={this.state.girls}/>
                <Announce/>
              </div>
            ) : (<PollQuestion voteCallback={this.handleCastedVote}/>)}
          </div>
        ) : (
          <div>
          <CircleTimer endTime={this.state.endTime}/>
            {!this.state.ballotCast ? (<PollQuestion voteCallback={this.handleCastedVote}/>) : (<Chart boys={this.state.boys} girls={this.state.girls}/>)}
          </div>
          )
        }
      </div>
    )
  }
}

export default Home
